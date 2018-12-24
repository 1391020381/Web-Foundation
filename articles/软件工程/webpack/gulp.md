# 爱车小屋 Activities 项目

> 主要用来部署活动页、独立项目、小项目等。

### 本地开发

```base
$ gulp
or
$ npm run dev
```

### 项目部署

#### 正式环境

- 上传静态资源到 OSS，上传 egg 文件到 202 服务器：
  - `$ npm run upload`
  - 选择正式环境，并确认
- 远程重启服务: `$ npm run remote-restart:prod`
- alinode 代理启动: `$ agenthub start agenthub.json`

#### 测试环境

- 上传所有资源(包括静态资源、egg 文件)到测试服：
  - `$ npm run upload`
  - 选择测试环境
- 远程重启服务: `$ npm run remote-restart:sit`

---

### 结构备注：

#### 自动化构建:gulp

- `$ npm i gulp -D`
- `$ touch gulpfile.ts`
- `$ npm i ts-node -D`，让 node(gulp) 可以直接运行 [gulpfile.ts]
- 自动化构建的新方向：[我为何放弃 Gulp 与 Grunt，转投 npm scripts](http://www.infoq.com/cn/news/2016/02/gulp-grunt-npm-scripts-part1)
- 其他
  - [gulp 的简单使用（MAC OX 系统）](http://blog.csdn.net/songchunmin_/article/details/51690572)
  - [精通 gulp 常用插件](https://zhuanlan.zhihu.com/p/25243171)
  - [gulp 的增量编译](https://github.com/gulpjs/gulp#incremental-builds)
- 配置信息见 [gulpfile.ts]

#### nginx 的配置

> 202 服务器 nginx 的配置

    server {
        listen       80;
        server_name  h5.car-house.cn;
        location / {
            proxy_pass    http://127.0.0.1:7001;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Real-PORT $remote_port;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

    }

#### 服务端 Coding: typescript

- `$ tsc init` 生成 tsconfig.json
- `$ npm install @types/node @types/gulp @types/sequelize`, 安装指定依赖包的 dt 文件
- 其他
  - [TS 中文文档][ts]
  - [TypeScript 入门教程](https://github.com/xcatliu/typescript-tutorial)

#### 客户端 Coding

##### 1. coffeescript

> 为什么不全项目 TS 化: CoffeeScript 的指导原则"她仅仅是 JavaScript"。

- `$ npm i gulp-coffee`
- 其他
  - [CS 中文文档](http://coffee-script.org/)
  - [文档](http://coffeescript.org/)

##### 2. ES6

#### 服务端基础框架 Egg

> egg 奉行『约定优于配置』

- 渲染模板

  - [nunjucks 中文文档][njk]
    - [webstorm 插件](https://plugins.jetbrains.com/plugin/7303-twig-support)

- 数据库 ORM 框架: Sequelize

  - [Sequelize 和 MySQL 对照](https://segmentfault.com/a/1190000003987871)
  - [Sequelize 文档](http://docs.sequelizejs.com/manual/installation/getting-started.html)

- Node.js 性能平台

  - [alinode 帮助文档](https://help.aliyun.com/product/60298.html)
  - [Egg 集成部署](https://help.aliyun.com/document_detail/60907.html?spm=a2c4g.11186623.6.553.bcPDNz)

#### 其他

- [精读前后端渲染之争](https://zhuanlan.zhihu.com/p/26366128)

---

### 业务备注：

#### 应用宝-微推广链接

- 设置推广链接: [腾讯开放平台](http://open.qq.com/)
- B 端(商户版)
  - http://a.app.qq.com/o/simple.jsp?pkgname=cn.carhouse.yctone
  - 应用宝内联 [App Store 链接](http://a.app.qq.com/o/simple.jsp?pkgname=cn.carhouse.yctone)
- C 端(车主版)
  - http://a.app.qq.com/o/simple.jsp?pkgname=cn.carhouse.user
  - 应用宝内联 [App Store 链接](http://a.app.qq.com/o/simple.jsp?pkgname=cn.carhouse.user)

---

[egg]: https://eggjs.org
[ts]: https://www.tslang.cn/docs/home.html
[njk]: http://mozilla.github.io/nunjucks/cn/templating.html
[gulpfile.ts]: ./gulpfile.ts
