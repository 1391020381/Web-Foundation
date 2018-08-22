* [一个故事讲完https](https://mp.weixin.qq.com/s/StqqafHePlBkWAPQZg3NrA)
* [HTTPS 升级指南](http://www.ruanyifeng.com/blog/2016/08/migrate-from-http-to-https.html)
* 对称加密算法 ,加密和解密用的是同一个密钥
* 非对称加密 RSA  保密的 私钥  公开的 公钥   用私钥加密的数据，只有对应的公钥才能加密,用公钥加密的数据,只有对应的私钥才能解密。
* RSA算法很慢 所以使用 非对称加密 + 对称加密

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/https%E7%A7%81%E9%92%A5%E5%85%AC%E9%92%A5.png)


* 这些CA本身也有证书来证明自己的身份,并且CA的信用是像树一样分级的,高层的CA给底层的CA做信用背书,而操作系统/浏览器中会内置一些顶层的CA的证书,相当于你自动信任了他们。这些
顶层CA证书一定得安全地放入操作系统/浏览器中,否则世界大乱。

* 非对称加密 + 对称加密 (生成一个对称加密算法的密钥,用RSA的方式安全发给你<第一次>, 随后就不用RSA了,只用这个密钥利用对称加密算法来通信。)

* https通信过程

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/https%E9%80%9A%E4%BF%A1%E8%BF%87%E7%A8%8B.png)

# HTTPS升级指南

1.获取证书
* 域名认证
* 公司认证
* 扩展认证
* 单域名证书
* 通配符证书
* 多域名证书
2. 安装证书

3. 修改链接
4.  301重定向

* 修改 Web服务器的配置 文件 ,使用 301重定向,将HTTP协议的访问导向 HTTPS协议

```
server {

  listen:80;
  server_name domain.com www.domamin.com;
  return 301 https:// domain.com$request.uri;
 }

```

# 安全措施
1. HTTP Strict Transport Security (HSTS)
* HTTP严格传输安全(简称HSTS)的作用,就是强制浏览器只能发出HTTPS请求,并阻止用户接受不安全的证书。
* 它在网站的响应头里面,加入一个强制声明。
```
Strict-Transport-Security: max-age=3153600;includeSubDomains
```
* HSTS 很大程度上解决了 SSL 剥离攻击。只要浏览器曾经与服务器建立过一次安全连接，之后浏览器会强制使用HTTPS，即使链接被换成了HTTP。

2. Cookie
* 另一个需要注意的地方是，确保浏览器只在使用 HTTPS 时，才发送Cookie。网站响应头里面，Set-Cookie字段加上Secure标志即可。
* Set-Cookie: LSID=DQAAAK...Eaem_vYg; Secure