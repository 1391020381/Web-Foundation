 # egg
 1. 注意：是 config 目录，不是 app/config!
 2. 提示：开发期默认开启了 development 插件，修改后端代码后，会自动重启 Worker 进程。
 3. 传给模板的数据需要包一层 {},在模板里面直接使用对象里面的数据
 4. 需要在 config.default.js配置  keys
 5. 在 config.default.js中配置 模板 
 6. 在 plugins.js中配置  模板引擎 
 7. 本地启动的应用是以 env:local 启动的, 读取的配置也是  config.default.js和 config.local.js合并的结果
 8. 指定端口
    ```
    {
    "scripts":{
      "dev":"egg-bin dev --port 7001"
     }
    }
    ```
  9. 开启所有模块的日志
  ```
  DEBUG=* npm run dev
  ```  
  
 # 基础功能
  * 目录结构<egg-project>
     * packge.json
    *  app.js
    * agent.js
    * app
    1. router
    2. controller
    3. service
    4. middleware
    5. schedule
    6. public
    7. view
    8. extend
    * helper.js
    * request.js
    * response.js
    * context.js
    * application.js
    * agent.js 
    9. config
    * plugin.js
    * config.default.js
    * config.prod.js
    * config.test.js
    * config.local.js
    * config.unittest.js
    10. test
    * middleware
    * controller
    
  * 内置对象
      1. Application
      2. Context请求级别的对象 <非用户请求的场景下 可以通过 Application.createAnonymousContext() 方法创建一个匿名 Context 实例 > 
      3. Request   Response
      4. Controller 基类，有下列属性:
         *  const { app, ctx } = this
         * ctx - 当前请求的Context实例
         * app - 应用的Application 实例
         * config -应用的配置
         * service - 应用的所有的 service
         * logger - 为当前controller封装的logger对象
      5. Service<类似 Controller>  
      6. Helper <类似Controller的属性,它会在每次请求时进行实例化,因此 Helper 上的所有函数也能获取到当前请求相关的上下文信息。>
          * ctx.helper.method()
          * 在模板中使用 helper.shtml()
      7.  Config
  # 运行环境
  *  app.config.env  
  # Config配置
        