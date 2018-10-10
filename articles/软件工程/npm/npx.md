# npx
* [npx 是什么](https://zhuanlan.zhihu.com/p/27840803)
* [npx: npm 5.2.0 内置的包执行器](https://juejin.im/entry/59658035f265da6c360a19dd)
* npx 会帮你执行依赖包里的二进制文件
```
// 以前
npm i -D webpack
./node_modules/.bin/webpack -v

```
```
npm i -D webpack 
npx webpack -v

```
* 也就是说npx会自动查找当前依赖包中的可执行文件,如果找不到,就会出PATH里找。如果依然找不到,就会帮你安装！
1.  npx 甚至支持远程仓库的可执行文件,如
```
npx github:piuccio/cowsay hello
```
* npx 致力于提升开发者使用包提供的命令行的体验。npx允许我们使用本地安装的命令行工具而不需要再定义npm run script,并且允许我们仅执行一次脚本不需要再将其实际安装到本地；同时npx还允许我们以不同的node版本运行指定命令、允许我们交换地开发Node命令行工具以及便捷地安装来自于gist的脚本。