
* [2018 年了，你还是只会 npm install 吗？](https://juejin.im/post/5ab3f77df265da2392364341)
1. 安装本地包/远程git仓库包
  * [package准确定义](https://docs.npmjs.com/getting-started/packages#what-is-a-package-)。我们在共享依赖包时,并不是非要将包发布到npm源上才提供给使用者来安装。这对于
  私有的不方便publish到远程源(即使是私有源),或者需要对某官方源进行改造,但依然需要把包共享的场景来说非常有用。
  * 本地模块引用
  *  创建config包，新增config文件夹,重命名config.js为config/index.js文件。创建package.json定义config包
  ```
  {
   "name":"config",
   "main":"index.js",
   "verson":'0.10'
   }
  ```
  * 在应用层package.json文件中新增依赖项,然后执行npm install ;或者执行第3步
  ```
  {
 "dependencies":{
    "config":"file:./config"
   }
  }
  ```
  * (等价于第二步)直接在应用目录执行 npm install file:./config。此时,查看node_modules目录我们会发现多出来一个名为
  config,执向上层config/文件夹的软链接。这是因为npm 识别file： 协议的url得知这包需要直接从文件系统中获取,会自动创建软链接到
  node_modules中,完成"安装"过程。


  * [npm CLI commands](https://docs.npmjs.com/cli/init)
