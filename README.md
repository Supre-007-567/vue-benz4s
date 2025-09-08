# vue-benz4s

这是一个基于 Vue 3 和 Vite 的项目模板，旨在帮助您快速开始开发。

## 推荐的 IDE 设置

- [VSCode](https://code.visualstudio.com/)
- 安装 [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 插件（并禁用 Vetur）

## 自定义配置

有关配置的详细信息，请参阅 [Vite 配置文档](https://vite.dev/config/)。

## 项目设置

安装依赖：

```sh
pnpm install
```

### 开发环境编译与热重载

```sh
pnpm dev
```

### 生产环境编译与压缩

```sh
pnpm build
```

### 使用 [ESLint](https://eslint.org/) 进行代码检查

```sh
pnpm lint
```

## 项目功能简介

该项目是一个基于 Vue 3 的前端应用，主要展示与汽车相关的内容，特别是梅赛德斯-奔驰品牌。它包含以下功能：

- **3D 汽车模型展示**：使用了多个 3D 模型和纹理资源，用于展示如 G63 AMG 和 1990 梅赛德斯-奔驰 190E 等车型。
- **用户系统**：包含登录页面和用户数据管理。
- **车辆展示与详情**：提供车辆列表、收藏、预约和详情页面。
- **响应式布局**：支持多种设备的访问，包含首页、服务页面、推荐页面等。

## 目录结构

- `public/`: 存放静态资源，如图片、3D 模型等。
- `src/assets/`: 存放项目所需的图片、模型和样式资源。
- `src/components/`: 包含多个 Vue 组件，用于构建页面的不同部分。
- `src/views/`: 页面视图组件，如首页、详情页、登录页等。
- `src/stores/`: 使用 Pinia 管理的状态存储，如车辆、用户和计数器信息。
- `src/router/`: 路由配置。
- `src/api/`: API 请求模块，用于与后端交互。
- `src/utiles/`: 工具函数，如提示框的实现。

## 开发建议

- 使用 VSCode 和 Volar 插件进行开发。
- 保持代码整洁，遵循 Vue 的最佳实践。
- 使用 ESLint 进行代码检查，确保代码质量。

## 贡献指南

欢迎贡献代码和改进项目。请遵循以下步骤：

1. Fork 项目。
2. 创建新分支。
3. 提交您的更改。
4. 发起 Pull Request。

## 许可证

该项目遵循 MIT 许可证。详情请查看项目中的 LICENSE 文件。