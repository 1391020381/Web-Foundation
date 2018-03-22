# CarHouse Activities Project
> 主要用来部署活动页、小项目。

### 本地开发
```base
$ gulp
or
$ npm run dev
```

### 部署

#### 正式环境
- 上传静态资源到OSS，上传egg文件到202服务器：`$ npm run upload:prod`
- 远程重启服务: `$ npm run remote-restart:prod`

#### 测试环境
- 上传所有资源(包括静态资源、egg文件)到测试服：`$ npm run upload:sit`
- 远程重启服务: `$ npm run remote-restart:sit`

---

### 结构备注：

#### 自动化构建:gulp
- `$ npm i gulp -D`
- `$ touch gulpfile.ts`
- `$ npm i ts-node -D`，让 node(gulp) 可以直接运行 [gulpfile.ts]
- 自动化构建的新方向：[我为何放弃Gulp与Grunt，转投npm scripts](http://www.infoq.com/cn/news/2016/02/gulp-grunt-npm-scripts-part1)
- 其他
  - [gulp的简单使用（MAC OX 系统）](http://blog.csdn.net/songchunmin_/article/details/51690572)
  - [精通gulp常用插件](https://zhuanlan.zhihu.com/p/25243171)
  - [gulp的增量编译](https://github.com/gulpjs/gulp#incremental-builds)
- 配置信息见 [gulpfile.ts]

#### nginx的配置
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
        }

    }

#### 服务端Coding: typescript
- `$ tsc init` 生成 tsconfig.json
- `$ npm install @types/node @types/gulp @types/sequelize`, 安装指定依赖包的 dt 文件
- 其他
  - [TS中文文档][ts]
  - [TypeScript 入门教程](https://github.com/xcatliu/typescript-tutorial)

#### 客户端Coding

##### 1. coffeescript
> 为什么不全项目TS化: CoffeeScript 的指导原则"她仅仅是 JavaScript"。

- `$ npm i gulp-coffee`
- 其他
  - [CS中文文档](http://coffee-script.org/)
  - [文档](http://coffeescript.org/)

#### 服务端基础框架Egg
> egg奉行『约定优于配置』

- 渲染模板
  - [nunjucks中文文档][njk]

- 数据库 ORM 框架: Sequelize
  - [Sequelize 和 MySQL 对照](https://segmentfault.com/a/1190000003987871)
  - [Sequelize文档](http://docs.sequelizejs.com/manual/installation/getting-started.html)

---

### 业务备注：

#### 应用宝-微推广链接
- 设置推广链接: [腾讯开放平台](http://open.qq.com/)
- B端(商户版)
  - http://a.app.qq.com/o/simple.jsp?pkgname=cn.carhouse.yctone
  - 应用宝内联 [App Store 链接](http://a.app.qq.com/o/simple.jsp?pkgname=cn.carhouse.yctone)
- C端(车主版)
  - http://a.app.qq.com/o/simple.jsp?pkgname=cn.carhouse.user
  - 应用宝内联 [App Store 链接](http://a.app.qq.com/o/simple.jsp?pkgname=cn.carhouse.user)

---

[egg]: https://eggjs.org
[ts]: https://www.tslang.cn/docs/home.html
[njk]: http://mozilla.github.io/nunjucks/cn/templating.html

[gulpfile.ts]: ./gulpfile.ts
