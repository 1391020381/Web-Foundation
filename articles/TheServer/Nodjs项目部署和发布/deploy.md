# 远程登录
  * putty
  * sudo gpasswd -a justdoit sudo <Adding user justdoit to group sudo>
  * sudo visudo
     *  User privilege specification<复制 root那行,粘贴到下一行<并把名字改为justdoit  ctr+ x ,出现保存提示 shift+ y  enter>
     *  sudo vim /etc/ssh/sshd_config    修改端口 UseDNS :no  AllowUser:justdoit
 # 防火墙
  * sudo iptables -F 
# 搭建node生产环境  
  * sudo apt-get update  更新
  * sudo apt-get install vim open ssl build-essential libssl-dev wget  curl git
  *  wget 安装 nvm
  * 通过nvm安装 node   nvm install v6.9.5
  * nvm use v6.9.5
  * nvm alias default v6.9.5  <设置默认版本>
  * echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sysctl -p
 # pm2
  * pm2 start app.js <窗口关闭, node服务还在>
 # 配置Nginx反向代理
  * apt-get install nginx
  * nginx -V  
  * /etc/nginx/conf.d   sudo vim imooc-com-8081.conf
