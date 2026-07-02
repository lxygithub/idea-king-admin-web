# 点子王管理后台

Vue 3 + Element Plus 管理后台前端

## 技术栈

- Vue 3
- Vue Router
- Pinia
- Element Plus
- Vite
- Axios

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:5173
```

## 构建

```bash
npm run build
```

构建产物在 `dist/` 目录。

## 部署

### 方式 1: 部署到服务器

```bash
# 将 dist 目录上传到服务器
scp -r dist/* user@server:/var/www/admin/
```

### 方式 2: Cloudflare Pages

```bash
npm install -g wrangler
wrangler login
wrangler pages deploy dist --project-name=admin-web
```

## 环境变量

API 地址在 `src/api/index.js` 中配置，默认使用相对路径 `/api/admin`。

## 项目结构

```
src/
├── api/              # API 调用
│   └── index.js
├── router/           # 路由配置
│   └── index.js
├── views/            # 页面组件
│   ├── Login.vue     # 登录页
│   ├── Layout.vue    # 布局
│   ├── Dashboard.vue # 概览
│   ├── Files.vue     # 文件管理
│   ├── Users.vue     # 用户管理
│   └── UserDetail.vue # 用户详情
├── App.vue
└── main.js
```
