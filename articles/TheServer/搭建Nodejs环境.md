# 安装 Node.js 环境
* Node.js 是运行在服务端的 JavaScript, 是基于 Chrome JavaScript V8 引擎建立的平台。

1. 下载并安装 Node.js
* 下载最新的稳定版 v6.10.3 到本地
 ### 在/home/ubuntu下
 * wget https://nodejs.org/dist/v6.10.3/node-v6.10.3-linux-x64.tar.xz
 * wget https://nodejs.org/dist/v9.8.0/node-v9.8.0-linux-x64.tar.xz
2. 下载完成后, 将其解压
  * tar xvJf node-v6.10.3-linux-x64.tar.xz
  * tar xvJf node-v9.8.0-linux-x64.tar.xz<xvJf  的J大写>
3. 将解压的 Node.js 目录移动到 /usr/local 目录下
   * mv node-v6.10.3-linux-x64 /usr/local/node-v6
   * mv node-v9.8.0-linux-x64 /usr/local/node-v9
4. 配置 node 软链接到 /bin 目录
  * ln -s /usr/local/node-v6/bin/node /bin/node
# 配置和使用 npm
## 配置 npm
* npm 是 Node.js 的包管理和分发工具。它可以让 Node.js 开发者能够更加轻松的共享代码和共用代码片段
1. 下载 node 的压缩包中已经包含了 npm , 我们只需要将其软链接到 bin 目录下即可
   * ln -s /usr/local/node-v6/bin/npm /bin/npm  
## 配置和使用npm
 ## 配置环境变量(sudo -s)
  1. 将 /usr/local/node-v6/bin 目录添加到 $PATH 环境变量中可以方便地使用通过 npm 全局安装的第三方工具
  * echo 'export PATH=/usr/local/node-v6/bin:$PATH' >> /etc/profile
  * echo 'export PATH=/usr/local/node-v9/bin:$PATH' >> /etc/profile
  2. 生效环境变量
   * source /etc/profile



#  安装node.js
1. curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
yum -y install nodejs
2. 测试node版本
  * node -v