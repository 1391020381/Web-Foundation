* [Nginx开发从入门到精通](http://tengine.taobao.org/book/index.html)
* [谁说前端不需要懂-Nginx反向代理与负载均衡](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650587742&idx=1&sn=ca8f942fb82f2e3ee217132a7a015184&chksm=8891d27abfe65b6c262c4b30506bfd0a76ce533066afbc8e8b50cfece26a414095cf14b203bd&mpshare=1&scene=23&srcid=0722eNMEFVzXRtPOidwEdmhI#rd)
* 反向代理
    * 当我们有一个服务器集群,并且服务器集群中每台服务器的内容一样的时候,同样我们要直接从个人电脑访问到服务器集群的时候无法访问,必须通过第三方服务器才能访问集群。这个时候，
    我们通过第三方服务器访问服务器集群的内容,但是我们并不知道哪台服务器提供的内容,此种代理方式成为反向代理。
* 负载均衡
    * 公司会建立很多的服务器,这些服务器组成了服务器集群,然后,当用户访问网站的时候,先访问一个中间服务器,再让这个中间服务器再服务器集群中选择一个压力较小的服务器,然后将该访问请求引入选择的服务器。
    所以,用户每次访问,都会保证服务器集群中的每个服务器压力趋于平衡,分担了服务器压力,避免了服务器崩溃的情况。`nginx会给你分配服务器压力小的去访问`。
* Nginx反向代理与负载均衡的实现
    * 用户访问网站的时候首先会访问nginx服务器,然后nginx服务器再从服务器集群中选择压力较小的服务器,将该请求引向该服务器。
* nginx配置
    * 安装
    * nginx.conf
    * 启动nginx   nginx   localhost:8080
    * nginx -s stop  停止nginx服务
    * nginx -s  reload
    * 检查配置  nginx -t 如果出现下面ok和successful就代表正确了,其他的都不对。
* proxy_pass
    * nginx反向代理主要通过 proxy_pass来配置,将你的项目的开发地址填写到proxy_pass后面, 正常的格式为 proxy_pass URL即可

    ```
    server {

        listen 80;

        location / {

            proxy_pass http://10.10.10.10:20186;

        }

    }

    ```




```
// 修改nginx.conf

worker_processes 1;

events {

    worker_connections 1024;

}

http {

    upstream firstdemo {
        ip_hash;
        server 39.106.145.33;

        server 47.93.6.93;

    }

    server {

        listen 8080;

        location / {

            proxy_pass http://firstdemo;

        }

    }

}

```



  * Upstream模块实现负载均衡
    * ip_hash指令
    * 每次刷新都会访问不同的服务器，这样就做到了负载均衡处理不过，更应该做到的是当用户第一次访问到其中一台服务器后，下次再访问的时候就直接访问该台服务器就好了，不用总变化了。那么就发挥了ip_hash的威力了
    * server指令
    * upstream指令及相关变量
    *  worker_processes  工作进程数,和CPU核数相同
    * worker_connections  每个进程允许的最大连接数
    * upstream 模块  负载均衡    语法格式 upstream name {}   里面写的两个server分别对应着不同的服务器
 * server模块
    * 实现反向代理
    * listen监督端口号
    * location / {}   访问根路径
    * proxy_pass http://firstdemo  代理到firstdemo里两个服务器上


    ![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/TheServer/Nginx/img/nginx%E5%9F%BA%E7%A1%80%E7%AF%87.png)


![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/TheServer/Nginx/img/%E5%9C%BA%E6%99%AF%E5%AE%9E%E8%B7%B5%E7%AF%87.png)


![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/TheServer/Nginx/img/%E6%9E%B6%E6%9E%84%E7%AF%87.png)

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/TheServer/Nginx/img/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%E7%AF%87.png)

# Nginx的优点
1. 更快
2. 高扩展性
3. 高可靠性
4. 低内存消耗
5. 单机支持10万以上的并发连接
6. 热部署
7. 最自由的BSD许可协议

