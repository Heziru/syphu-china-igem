# SYPHU-China iGEM 团队站点

Vue 3 + Vite + Vue Router + Tailwind CSS。

## 本地运行

```bash
npm install
npm run dev
```

## 上传到 GitHub

仓库：**[Heziru/syphu-china-igem](https://github.com/Heziru/syphu-china-igem)**

若本目录尚未初始化 Git：

```bash
git init
git add .
git commit -m "Initial commit: SYPHU-China iGEM site"
```

关联远程并推送（首次）：

```bash
git remote add origin https://github.com/Heziru/syphu-china-igem.git
git branch -M main
git push -u origin main
```

若已添加过 `origin`，只需：

```bash
git push -u origin main
```

## 用 GitHub Pages 上线（本仓库已配置 Actions）

1. 把代码推送到 **`main`**（或 **`master`**）分支。
2. 打开仓库 **Settings → Pages**。
3. **Build and deployment** 里，**Source** 选 **GitHub Actions**（不要选 Deploy from a branch）。
4. 在 **Actions** 里等待 **Deploy to GitHub Pages**  workflow 跑绿。

部署完成后，本仓库（项目站）线上地址一般为：

**https://heziru.github.io/syphu-china-igem/**

（若使用用户站点仓库 `xxx.github.io`，则根域为 `https://heziru.github.io/`。）

路由已使用 `import.meta.env.BASE_URL`，会与上述路径一致。

### 本地模拟「项目站」构建（可选）

仓库名若为 `syphu-china-igem`，在 PowerShell 中：

```powershell
$env:VITE_BASE="/syphu-china-igem/"
npm run build
npx vite preview --base /syphu-china-igem/
```

浏览器打开终端里提示的预览地址，检查子路径是否正常。

## 环境变量

若使用 Web3 表单，在项目根目录创建 `.env`（勿提交），参考：

```
VITE_WEB3FORMS_ACCESS_KEY=你的密钥
```

`.env` 已在 `.gitignore` 中。

## 多语言机翻（可选，本地 Python）

站点文案以 `src/locales/zh-CN.json` 为主。可用开源库 **[translators](https://github.com/UlionTse/translators)**（PyPI：`translators`）在本地调用 Bing / Google 等**免费网页翻译接口**，批量补全 `en`、`fr`、`zh-TW`、`zh-HK` 中与简体相同或未译的条目（**不**打进前端包，无需 API Key）。

```bash
pip install -r requirements-i18n.txt
# 先试跑 2 条、不写文件
python scripts/translate_locales.py --target en --mode same-as-zh --dry-run --max-keys 2
# 正式写入（默认 same-as-zh，约 0.45s/条，防限流）
python scripts/translate_locales.py --target fr zh-TW --sleep 0.5
```

也可用 `npm run i18n:translate`（需本机已安装 Python 且可执行 `python`）。机翻仅供参考，发布前请人工校对；请遵守各翻译服务的使用条款，避免短时间大量请求。

### 繁体中文（OpenCC，推荐）

港台繁体应以 **`src/locales/zh-CN.json` 为唯一主文案**，用 [OpenCC](https://github.com/BYVoid/OpenCC) 做**简转繁**（非机翻英文），生成 `zh-TW.json`（**s2twp**，台湾用词）与 `zh-HK.json`（**s2hk**，香港用词），会**整文件覆盖**这两个文件。

```bash
pip install -r requirements-i18n.txt
python scripts/opencc_locales.py
# 或 npm run i18n:opencc
```

仅更新台湾或香港其一：`python scripts/opencc_locales.py --no-hk` 或 `--no-tw`。

**维护流程**：先改 `zh-CN.json` → 再运行上述命令 → `npm run i18n:check`。若曾对 `zh-TW`/`zh-HK` 手写修改，运行前请自行备份（脚本以简体源为准重生成）。

### 团队页成员简介（`teamRoster.bio`）

历届成员卡片上的**简介**来自 `src/locales/partials/teamRoster.bio.*.json`（在 `src/i18n/index.js` 中合并为 `teamRoster.bio`）。**主文案**：`teamRoster.bio.zh-CN.json`；英文、法文为对应 `en`/`fr` 文件；繁体由 OpenCC 自简体生成 `zh-TW`/`zh-HK`。成员**姓名**仍在 `src/data/teamWiki.js` 中保持英文（及 `nameZh` 仅作数据保留，页面不强制显示）。改简介时同步更新各语言分片后执行 `npm run i18n:check`。
