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