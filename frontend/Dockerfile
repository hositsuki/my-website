# frontend/Dockerfile
# 使用 Node.js 作为基础镜像
FROM node:16-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 使用 nginx 作为生产环境的 web server
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html

# 替换默认的 nginx 配置，支持前端路由
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
