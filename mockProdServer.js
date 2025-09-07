// mockProdServer.js
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

// 导入所有 mock 文件
const modules = import.meta.globEager('./mock/**/*.js')

const mockModules = []
Object.keys(modules).forEach((key) => {
  if (modules[key].default) {
    mockModules.push(...modules[key].default)
  }
})

// 生产环境初始化 mock 服务
export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
