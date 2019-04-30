# 串行
* 只需要用 && 符号把多条 npm script 按先后顺序串起来即可
* 需要注意的是，串行执行的时候如果前序命令失败（通常进程退出码非0），后续全部命令都会终止
# 并行
* 把连接多条命令的 && 符号替换成 & 即可
* npm-run-all


* 常见的做法使用 husky 或者 pre-commit在本地提交前做lint
* npm install -D husky

```
{
  "script":{
    "precommit":"eslint src/**/*.js"
  }
}

```

* lint-staged 每次提交只检查本次提交修改的文件
* npm install lint-staged -D 
  ```
  {
    "script":{
      "precommit":"lint-staged"
    },
    "lint-staged":{
      "src/**/*.js":"eslint"
    }
  }
  ```

# npm script的 钩子
* npm script的设计者为命令的执行增加了类似的生命周期的机制,具体来说就是 pre 和 post 钩子脚本。
* 这种特性在某些操作前需要做检查,某些操作后需要做清理的情况下非常有用。

# 实现 npm script 跨平台兼容

## 文件系统操作的跨平台兼容
* rimraf 或 del-cli,用来删除文件和目录, 实现类似 rm -rf的功能
* cpr 用于拷贝 复制文件和目录,实现类似于 cp -r 的功能
* make-dir-cli 用于创建目录,实现类似于 mkdir -p的功能。


# 用 cross-env 设置环境变量



*  scripty 
*  用 node.js 脚本替代复杂的 npm script    shelljs
