* [ 如何优雅地在github上贡献代码](https://segmentfault.com/a/1190000000736629)

* 以 swoole 为例
## Fork项目
* 首先需要fork这个项目
* 你的github账号中会出现 swoole/swoole-src这个项目
* 在本地电脑上使用 git clone git@github.com:1391020381/swoole.src.git
## 获取原项目代码
* 进入swoole-src文件夹,添加swoole的远程地址  git remote add upstream https://github.com/swoole/swoole-src.git
* 获取 swoole最新代码 git pull upstream master
* 现在我们在fork来的master分支上,这个master留作跟踪upstream的远程代码
## 创建分支
* 好了,现在可以开始贡献我们的代码了
* 按照国际惯例,我们一般不在master上提交新代码,而需要为新增的功能或者fixbug创建新分支,再合并到master上,使用以下代码创建分支 git checkout -b branch1
* 现在我们可以在分支上更改代码了 假设我们已经添加了一些代码,提交到代码库。 git commit -a -m "new commit"
