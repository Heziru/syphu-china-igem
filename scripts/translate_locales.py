#!/usr/bin/env python3
"""
使用 PyPI 库 translators（https://github.com/UlionTse/translators）
聚合 Bing / Google 等免费翻译接口，将 zh-CN 为主文案批量译入其它 locale JSON。

注意：
- 机翻质量有限，发布前请人工校对；勿高频请求以免 429。
- 尊重各翻译服务的使用条款；本脚本仅在本地开发机运行，不接入前端运行时。

用法（在项目根目录）：
  pip install -r requirements-i18n.txt
  python scripts/translate_locales.py --target en fr
  python scripts/translate_locales.py --target zh-TW --mode same-as-zh --sleep 0.5
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from copy import deepcopy
from pathlib import Path
from typing import Any

try:
    import translators as ts
except ImportError:
    print("请先安装: pip install -r requirements-i18n.txt", file=sys.stderr)
    sys.exit(1)

_PH = re.compile(r"\{[^{}]+\}")


def _protect_placeholders(text: str) -> tuple[str, list[str]]:
    slots: list[str] = []

    def repl(m: re.Match[str]) -> str:
        slots.append(m.group(0))
        return f"⟦PH{len(slots) - 1}⟧"

    return _PH.sub(repl, text), slots


def _restore_placeholders(text: str, slots: list[str]) -> str:
    out = text
    for i, s in enumerate(slots):
        out = out.replace(f"⟦PH{i}⟧", s)
    return out


def has_cjk(s: str) -> bool:
    return bool(re.search(r"[\u4e00-\u9fff]", s))


LOCALE_TO_TRANSLATOR_LANG = {
    "en": "en",
    "fr": "fr",
    "zh-TW": "zh-TW",
    "zh-HK": "zh-HK",
}


def translate_one(
    text: str,
    *,
    to_locale: str,
    translator: str,
    sleep_s: float,
) -> str:
    if not text.strip():
        return text
    protected, slots = _protect_placeholders(text)
    to_lang = LOCALE_TO_TRANSLATOR_LANG.get(to_locale, "en")

    last_err: Exception | None = None
    for engine in [translator, "bing", "alibaba", "google"]:
        try:
            time.sleep(sleep_s)
            out = ts.translate_text(
                protected,
                translator=engine,
                from_language="zh-CHS",
                to_language=to_lang,
            )
            if isinstance(out, dict):
                out = out.get("text") or out.get("translated_text") or str(out)
            return _restore_placeholders(str(out), slots)
        except Exception as e:  # noqa: BLE001
            last_err = e
            continue
    raise RuntimeError(f"翻译失败: {text[:40]}… 最后错误: {last_err}")


def should_update(
    mode: str,
    zh_val: str,
    tgt_val: Any,
) -> bool:
    if mode == "missing":
        return tgt_val is None or (isinstance(tgt_val, str) and tgt_val.strip() == "")
    if mode == "same-as-zh":
        if tgt_val is None:
            return True
        return isinstance(tgt_val, str) and tgt_val == zh_val and has_cjk(zh_val)
    if mode == "cjk-in-target":
        if tgt_val is None:
            return True
        return isinstance(tgt_val, str) and has_cjk(tgt_val) and has_cjk(zh_val)
    if mode == "all":
        return True
    raise ValueError(f"未知 mode: {mode}")


def merge_translate(
    zh_node: Any,
    tgt_node: Any,
    *,
    to_locale: str,
    mode: str,
    translator: str,
    sleep_s: float,
    stats: dict[str, int],
    max_keys: int | None,
    dry_run: bool,
) -> Any:
    if max_keys is not None and stats["n"] >= max_keys:
        return tgt_node

    if isinstance(zh_node, dict):
        out: dict[str, Any] = deepcopy(tgt_node) if isinstance(tgt_node, dict) else {}
        for k, v in zh_node.items():
            out[k] = merge_translate(
                v,
                out.get(k),
                to_locale=to_locale,
                mode=mode,
                translator=translator,
                sleep_s=sleep_s,
                stats=stats,
                max_keys=max_keys,
                dry_run=dry_run,
            )
        return out

    if isinstance(zh_node, list):
        tlist = tgt_node if isinstance(tgt_node, list) else []
        new_list: list[Any] = []
        for i, v in enumerate(zh_node):
            titem = tlist[i] if i < len(tlist) else None
            new_list.append(
                merge_translate(
                    v,
                    titem,
                    to_locale=to_locale,
                    mode=mode,
                    translator=translator,
                    sleep_s=sleep_s,
                    stats=stats,
                    max_keys=max_keys,
                    dry_run=dry_run,
                )
            )
        return new_list

    if isinstance(zh_node, str):
        if not should_update(mode, zh_node, tgt_node if isinstance(tgt_node, str) else None):
            return tgt_node if isinstance(tgt_node, str) else zh_node
        try:
            new_val = translate_one(
                zh_node,
                to_locale=to_locale,
                translator=translator,
                sleep_s=sleep_s,
            )
        except Exception as e:  # noqa: BLE001
            print(f"  [skip] {e}", file=sys.stderr)
            return tgt_node if isinstance(tgt_node, str) else zh_node
        stats["n"] += 1
        if dry_run and stats["n"] <= 3:
            print(f"[dry] #{stats['n']}:\n  {zh_node[:100]!r}\n  -> {new_val[:100]!r}")
        return new_val

    return zh_node


def run(
    *,
    targets: list[str],
    mode: str,
    translator: str,
    sleep_s: float,
    dry_run: bool,
    max_keys: int | None,
) -> None:
    root = Path(__file__).resolve().parents[1]
    loc_dir = root / "src" / "locales"
    zh_path = loc_dir / "zh-CN.json"
    zh_data = json.loads(zh_path.read_text(encoding="utf-8"))

    for loc in targets:
        if loc == "zh-CN":
            print("跳过源语言 zh-CN", file=sys.stderr)
            continue
        if loc not in LOCALE_TO_TRANSLATOR_LANG:
            print(f"不支持的目标 locale: {loc}，支持: {list(LOCALE_TO_TRANSLATOR_LANG)}", file=sys.stderr)
            continue

        out_path = loc_dir / f"{loc}.json"
        if not out_path.exists():
            print(f"缺少文件: {out_path}", file=sys.stderr)
            continue

        tgt_data = json.loads(out_path.read_text(encoding="utf-8"))
        stats = {"n": 0}
        merged = merge_translate(
            zh_data,
            tgt_data,
            to_locale=loc,
            mode=mode,
            translator=translator,
            sleep_s=sleep_s,
            stats=stats,
            max_keys=max_keys,
            dry_run=dry_run,
        )

        if dry_run:
            print(f"[dry-run] {loc}: 共译 {stats['n']} 条（未写盘）")
            continue

        out_path.write_text(
            json.dumps(merged, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        print(f"已写入 {out_path}（共译 {stats['n']} 条）")


def main() -> None:
    ap = argparse.ArgumentParser(description="使用 translators 库机翻 locale JSON")
    ap.add_argument(
        "--target",
        nargs="+",
        default=["en", "fr", "zh-TW", "zh-HK"],
        help="目标 locale 文件名（不含 .json）",
    )
    ap.add_argument(
        "--mode",
        choices=["missing", "same-as-zh", "cjk-in-target", "all"],
        default="same-as-zh",
        help="missing=仅空键; same-as-zh=与简体相同且含中文时重译; cjk-in-target=目标仍含中文时重译; all=全部覆盖（慎用）",
    )
    ap.add_argument("--translator", default="bing", help="首选引擎，失败会自动换其它引擎")
    ap.add_argument("--sleep", type=float, default=0.45, help="每次请求间隔秒数，防 429")
    ap.add_argument("--dry-run", action="store_true", help="只试译少量并打印，不写文件")
    ap.add_argument("--max-keys", type=int, default=None, help="最多处理多少条（调试）")
    args = ap.parse_args()
    run(
        targets=args.target,
        mode=args.mode,
        translator=args.translator,
        sleep_s=args.sleep,
        dry_run=args.dry_run,
        max_keys=args.max_keys,
    )


if __name__ == "__main__":
    main()
