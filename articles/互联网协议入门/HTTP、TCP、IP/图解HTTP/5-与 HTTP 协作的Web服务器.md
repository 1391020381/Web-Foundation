* 一台Web服务器可搭建多个独立域名的Web网站,也可作为通信路径上的中转服务器提升传输效率。
# 用单台虚拟主机实现多个域名
* HTTP/1.1 规范允许一台 HTTP 服务器搭建多个 Web 站点。比如，提供 Web 托管服务（Web Hosting Service）的供应商，可以用一台服务器为多位客户服务，也可以以每位客户持有的域名运行各自不同的网站。这是因为利用了虚拟主机（Virtual Host，又称虚拟服务器）的功能。
* 即使物理层面只有一台服务器，但只要使用虚拟主机的功能，则可以假想已具有多台服务器。
* `持有资源实体的服务器被称为源服务器。`
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E7%94%A8%E5%8D%95%E5%8F%B0%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA%E5%AE%9E%E7%8E%B0%E5%A4%9A%E4%B8%AA%E5%9F%9F%E5%90%8D.png)

# 通信数据转发程序 ：代理、网关、隧道
* 这些应用程序和服务器可以将请求转发给通信线路上的下一站服务器，并且能接收从那台服务器发送的响应再转发给客户端。
1. 代理
* 代理是一种有转发功能的应用程序，它扮演了位于服务器和客户端“中间人”的角色，接收由客户端发送的请求并转发给服务器，同时也接收服务器返回的响应并转发给客户端。
2. 网关
* 网关是转发其他服务器通信数据的服务器，接收从客户端发送来的请求时，它就像自己拥有资源的源服务器一样对请求进行处理。有时客户端可能都不会察觉，自己的通信目标是一个网关。
3. 隧道
* 隧道是在相隔甚远的客户端和服务器两者之间进行中转，并保持双方通信连接的应用程序。
## 代理

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E4%BB%A3%E7%90%86.png)

* 使用代理服务器的理由有：利用缓存技术减少网络带宽的流量,组织内部针对特定网站的访问控制,以获取访问日志为主要目的,等等。
代理有多种使用方法,按两种基准分类。一种是是否使用缓存,另一个是是否会修改报文
1. 缓存代理
* 代理转发响应时，缓存代理（Caching Proxy）会预先将资源的副本（缓存）保存在代理服务器上。
* 当代理再次接收到对相同资源的请求时，就可以不从源服务器那里获取资源，而是将之前缓存的资源作为响应返回。
2. 透明代理
* 转发请求或响应时，不对报文做任何加工的代理类型被称为透明代理(Transparent Proxy)。反之，对报文内容进行加工的代理被称为非透明代理。
## 网关

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP、TCP、IP/img/网关.png)

## 隧道

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E9%9A%A7%E9%81%93.png)

## 保存资源的缓存

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E4%BF%9D%E5%AD%98%E8%B5%84%E6%BA%90%E7%9A%84%E7%BC%93%E5%AD%98.png)

## 缓存的有效期限

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E7%BC%93%E5%AD%98%E7%9A%84%E6%9C%89%E6%95%88%E6%9C%9F%E9%99%90.png)

## 客户端的缓存

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%BC%93%E5%AD%98.png)

