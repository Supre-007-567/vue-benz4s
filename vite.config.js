import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    viteMockServe({
      mockPath: 'mock', // mock 文件存放路径
      localEnabled: true, // 开发环境启用
      prodEnabled: true, // 生产环境启用（打包时包含 mock 代码）
      supportTs: false, // 使用 JS 而非 TS
      // 关键：生产环境注入 mock 服务初始化代码
      injectCode: `
        import { createProdMockServer } from 'vite-plugin-mock';
        import mockModules from './mock/**/*.js';
        createProdMockServer(Object.values(mockModules).flatMap(m => m.default));
  `,
      // 将 mock 初始化代码注入到入口文件（通常是 src/main.js）
      injectFile: 'src/main.js',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: './', // 确保静态资源路径正确
})
