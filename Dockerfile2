FROM node:10-alpine

ENV EXPOSE_PORT 3000
ENV TZ=Asia/Shanghai

WORKDIR /app

COPY . .

RUN npm install -g @babel/cli @babel/core \
    && npm install

RUN npm run build

EXPOSE ${EXPOSE_PORT}

ENTRYPOINT [ "node", "/app/dist/app.js" ]
