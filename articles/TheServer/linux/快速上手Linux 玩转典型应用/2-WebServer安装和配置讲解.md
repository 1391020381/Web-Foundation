# WebServer安装和配置讲解
1. apache 在 centos 叫 httpd  ubuntu 叫 apache
* yum install httpd
* service httpd start
* service httpd stop
2. nginx
##  yum install nginx
* 添加CentOS7 nginx yum  资源库
* sudo rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
* service nginx start
* servie nginx stop
* service nginx reload
* 虚拟主机
* 多域名、多端口
```
server {
  listen 80；
  listen 9999;
  server_name www.imocc.test www.imooc3.test;
  root /data/www;
  index index.html index.htm;
  location / {
      rewrite ^(.*)\.http$ /index.html;
  }
}

```
* 伪静态
* location / {
      rewrite ^(.*)\.http$ /index.html;
  }
* 日志格式化
* log_format main  
* access_log /address/p/var main 需要 写入那个格式日志 及地址
* 反向代理  和负载均衡
```
upstream imooc_hosts {
    server 118.89.106.120:80 weight=5;
    server 192.168.106:80 weight=1;
}

server {
   listen 80；
  listen 9999;
  return 200 "$http_host"; // 调试
  server_name www.imocc.test www.imooc3.test;
  root /data/www;
  index index.html index.htm;
  log_format imooc;
  access_log /var/log/nginx/access_imooc.log  imooc;
  location / {
      # rewrite ^(.*)\.http$ /index.html;
     proxy_set_header Host www.54php.cn;
     proxy_pass http://imooc_hosts;
  } 
}

```
* 调试技巧