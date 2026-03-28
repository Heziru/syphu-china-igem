import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages「项目站」需带仓库名前缀，构建时设置环境变量 VITE_BASE=/仓库名/
// 用户站点（仓库名以 .github.io 结尾）使用 VITE_BASE=/
const base = process.env.VITE_BASE ?? '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
  server: {
    host: true,
    port: 5173,
  },
})
