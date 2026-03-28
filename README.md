# SYPHU-China iGEM 团队站点

Vue 3 + Vite + Vue Router + Tailwind CSS。

## 本地运行

```bash
npm install
npm run dev
```

## 上传到 GitHub

若本目录尚未初始化 Git：

```bash
git init
git add .
git commit -m "Initial commit: SYPHU-China iGEM site"
```

在 GitHub 新建空仓库（不要勾选自动添加 README），然后：

```bash
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main
```

## 用 GitHub Pages 上线（本仓库已配置 Actions）

1. 把代码推送到 **`main`**（或 **`master`**）分支。
2. 打开仓库 **Settings → Pages**。
3. **Build and deployment** 里，**Source** 选 **GitHub Actions**（不要选 Deploy from a branch）。
4. 在 **Actions** 里等待 **Deploy to GitHub Pages**  workflow 跑绿。

部署完成后，地址一般为：

- **普通仓库**（例如仓库名 `syphu-china-igem`）：`https://你的用户名.github.io/syphu-china-igem/`
- **用户站点仓库**（仓库名恰好为 `你的用户名.github.io`）：`https://你的用户名.github.io/`

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
