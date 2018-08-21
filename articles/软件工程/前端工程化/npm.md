
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

 2.  私有git共享package
 * 我们可以简单地将被依赖的包托管在私有的git仓库中,然后将该git url保存到 dependencies中 npm会直接调用系统的git 命令从git仓库拉取包的内容到node_modules中。
 * [npm支持的git url格式](https://docs.npmjs.com/files/package.json#git-urls-as-dependencies)
 * <protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
* git 路径后可以使用 # 指定特定的 git branch/commit/tag, 也可以 #semver: 指定特定的 semver range
```
git+ssh://git@github.com:npm/npm.git#v1.0.27
git+ssh://git@github.com:npm/npm#semver:^5.0
git+https://isaacs@github.com/npm/npm.git
git://github.com/npm/npm.git#v1.0.27

```
3. 开源 package问题修复
* 最好的的办法当是 fork原作者的git库,在自己所属的repo下修复问题后,将 dependencies中相应的依赖项更改为自己修复版本的git url即可解决。(Fork代码库后,也便于向原作者提交pr修复问题。上游代码库修复问题后,再次更新我们的依赖配置也不迟。)
4. 依赖版本升级
* npm 5 package-lock.json 无论何时执行 install npm都会优先按照package-json中指定的版本来安装webpack。
* 无论何时完成安装/更新 package-lock文件总会跟着 node_modules更新(因此可以视package-lock文件为node_modules的JSON表述)
* 已安装node_modules后若执行npm update,package.json中版本号也会随之更改
5. 最佳实践
* npm >5.1版本,保持package-lock.json文件默认开启配置
* 依赖range到 package.json中 提交 package.json package-lock.json 不要提交 node_modules目录。
* 初始化：项目成员首次 checkout/clone项目代码后,执行一次 npm install 安装依赖包
* 不要手动修改 package-lock.json
* 升级依赖包
  * 升级小版本; npm update
  * 升级大版本： npm install <package-name>@<version>
  * 也可手动修改package.json中版本号也要升级的版本(大于现有版本号)并指定所需的semver 然后执行 npm install
  * 本地验证升级后新版本无问题后,提交新的 package.json package-lock.json文件
