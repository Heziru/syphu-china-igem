#!/usr/bin/env python3
"""
使用 OpenCC 以 zh-CN.json 为唯一源，生成繁体并覆写 zh-TW.json / zh-HK.json。

- 台湾：s2twp（简体 → 台湾正体，含词汇级转换）
- 香港：s2hk（简体 → 香港繁体）

只递归转换 JSON 字符串；英文、URL、{placeholder} 一般不变。

依赖：pip install -r requirements-i18n.txt

注意：会整文件覆盖 zh-TW/zh-HK；改简体文案后请重新运行本脚本。
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

try:
    import opencc
except ImportError:
    print("请先安装：pip install -r requirements-i18n.txt", file=sys.stderr)
    sys.exit(1)


def convert_value(obj, converter: opencc.OpenCC):
    if isinstance(obj, dict):
        return {k: convert_value(v, converter) for k, v in obj.items()}
    if isinstance(obj, list):
        return [convert_value(v, converter) for v in obj]
    if isinstance(obj, str):
        return converter.convert(obj)
    return obj


def run(*, tw: bool, hk: bool, dry_run: bool) -> None:
    root = Path(__file__).resolve().parents[1]
    loc = root / "src" / "locales"
    partials = loc / "partials"
    src_path = loc / "zh-CN.json"
    data = json.loads(src_path.read_text(encoding="utf-8"))

    if tw:
        conv_tw = opencc.OpenCC("s2twp")
        out_tw = convert_value(data, conv_tw)
        p = loc / "zh-TW.json"
        if dry_run:
            print(f"[dry-run] 将写入 {p}（OpenCC s2twp）")
        else:
            p.write_text(json.dumps(out_tw, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            print(f"已写入 {p}")

    if hk:
        conv_hk = opencc.OpenCC("s2hk")
        out_hk = convert_value(data, conv_hk)
        p = loc / "zh-HK.json"
        if dry_run:
            print(f"[dry-run] 将写入 {p}（OpenCC s2hk）")
        else:
            p.write_text(json.dumps(out_hk, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            print(f"已写入 {p}")

    bio_src = partials / "teamRoster.bio.zh-CN.json"
    if bio_src.exists():
        bio_data = json.loads(bio_src.read_text(encoding="utf-8"))
        if tw:
            conv_tw = opencc.OpenCC("s2twp")
            out_bio = convert_value(bio_data, conv_tw)
            p = partials / "teamRoster.bio.zh-TW.json"
            if not dry_run:
                p.write_text(json.dumps(out_bio, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
                print(f"已写入 {p}")
            else:
                print(f"[dry-run] 将写入 {p}（teamRoster.bio OpenCC s2twp）")
        if hk:
            conv_hk = opencc.OpenCC("s2hk")
            out_bio = convert_value(bio_data, conv_hk)
            p = partials / "teamRoster.bio.zh-HK.json"
            if not dry_run:
                p.write_text(json.dumps(out_bio, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
                print(f"已写入 {p}")
            else:
                print(f"[dry-run] 将写入 {p}（teamRoster.bio OpenCC s2hk）")


def main() -> None:
    ap = argparse.ArgumentParser(description="OpenCC：zh-CN → zh-TW / zh-HK 繁体")
    ap.add_argument("--no-tw", action="store_true", help="不生成 zh-TW.json")
    ap.add_argument("--no-hk", action="store_true", help="不生成 zh-HK.json")
    ap.add_argument("--dry-run", action="store_true", help="只打印，不写文件")
    args = ap.parse_args()
    tw = not args.no_tw
    hk = not args.no_hk
    if not tw and not hk:
        print("请勿同时使用 --no-tw 与 --no-hk", file=sys.stderr)
        sys.exit(1)
    run(tw=tw, hk=hk, dry_run=args.dry_run)


if __name__ == "__main__":
    main()
