FROM node:16.13.2-alpine
WORKDIR /app
COPY frontend/vite_fast/ ./

RUN apk update
# "yarn dev"は package.json内にscriptｓに記載されています。
# Viteを実行
CMD ["yarn", "run", "dev", "--host"]