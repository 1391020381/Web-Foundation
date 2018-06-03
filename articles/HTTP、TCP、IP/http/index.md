# 根据慕课网教程整理
## HTTP/0.9
* 只有一个命令GET
* 没有HEADER等描述数据的信息
* 服务器发送完毕,就关闭TCP连接
## HTTP/1.0
* 增加了很多命令
* 增加了  status code 和 header
* 多字符集支持、多部分发送、权限、缓存等。
## HTTP/1.1 HTTPS
* 持久连接
* pipeline
* 增加host和其他一些命令
## HTTP2
* 所有数据以二进制传输
* 同一个连接里面发送多个请求不再需要按照顺序来
* 头信息压缩以及推送等提高效率的功能
## HTTP三次握手
* http request
* TCP connection
* SYN(synchronize 使同步)
* ACK(acknowledgement)
## wireshark
## URI URL  URN
## HTTP报文
* 请求报文
* 响应报文
## 认识HTTP客户端
* curl baidu.com  curl http://www.baidu.com
## CORS跨域请求的限制于解决
* 跨域请求其实已经发送,也可以正确返回,当浏览器检测到是跨域且
没有设置 Access-Control-Allow-Origin时,浏览器解析了返回内容,发现不符合浏览器的安全策略,会忽略返回内容，并报错。
* JSONP
    * link script img 的src
# [使用 Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
## Fetch API提供了一个JavaScript接口,用于访问和操作HTTP管道的部分,例如请求和响应。它还提供了一个全局的fetch()方法,该方法提供了一种简单,合理的方式来跨网络异步获取资源
* 这种功能以前使用 XMLHttpRequest实现的。Fetch提供了一个更好的替代方法,可以很容易地被其他技术使用,例如 Service Worders。Fetch还提供了单个逻辑位置来定义其他HTTP相关概念,例如CORS和HTTP的扩展。
* 请注意,fetch规范与jQuery.ajax()主要有两种方式的不同,牢记：
    * 当接受到一个代表错误的HTTP状态码时,从fetch()返回的Promise不会被标记为reject,即使该HTTP响应状态码是404或500.相反,它会将Promise状态标记为resolve(但是会将resolve的返回值的ok属性设置为false),仅当网络故障时或请求被阻止时,才会标记为reject.
    * 默认情况下,fetch不会从服务端发送或接受任何cookies,如果站点依赖于用户session，则会导致未经认证的请求(要发送cookies,必须设置credentials选项)
## CORS跨域限制以及预请求验证 
* 跨域的默认请求 GET  HEAD  POST 
* 允许的Content-type : text/plain  multipart/form-data  application/x-www-form-urlencoded
* 其他限制：
    * 请求头限制
    * XMLHttpRequestUpload对象均没有注册任何事件监听器
    * 请求中没有使用ReadableStream对象
* OPTIONS    
## 缓存头Cache-Control的含义和使用
### 可缓存性
1. public
2. private
3. no-cache
### 到期
1. max-age = <seconds>
2. s-maxage= <seconds>  为代理服务器设置
3. max-stale = <seconds> 在发送送端设置,在浏览器不会自动设置
### 重新验证 <在浏览器中不常用>
1. must-revalidate
2. proxy-revalidate
### 其他
*  no-store 
    * 代理和浏览器都不能缓存
* no-transform
    * 代理不能进行一些转换

# 静态资源打包发布的时候添加版本号
* 一般的html文件一般不缓存或者缓存时间比较短,如果html缓存时间过长,当服务器的资源修改后,浏览器还是用的原来请求返回的东西,而达不到更新的目的。
* 浏览器在解析html的时候,会根据 js  img  csslink的  src的URL来发送请求。当html都不更新了,里面的其他资源也不会更新了。
* 当html的不缓存或者缓存时间比较短的话,就会请求到新的html,并会解析里面的其他资源。当里面的其他资源的URL加了版本号,就相当于一个新的请求。从而达到更新的目的。  
# 缓存验证Last-Modified和Etag的使用  
* Cache-Control:max-age=2000,nocache  使用缓存但下次要先验证缓存是否有效
* 服务器可以获取相应的请求的的头部。
# Cookie和Session
* 通过Set-Cookie设置
* 下次请求会自动带上
* 键值对,可以设置多个
## cookie属性
* max-age和 expires设置过期时间 默认在当前会话
* Secure只在https的时候发送
* HttpOnly无法通过document.cookie访问
* HostAdmin Host Editor
* // 二级域名共享cookie
## HTTP长连接
* Connection :Keep-alive
# 数据协商
* Accept  
* Accept-Encoding
* Accept-Language
* User-Agent
* Content-type
* Content-Encoding
* Content-Language

# window.chrome.loadTimes()   //查看当前的网页是否使用HTTP2
# Redirect重定向
* 301 缓存慎重使用,被浏览器缓存后,需用户自己清缓存<永久重定向>
# Content-Security-Policy
* 限制资源获取
* 报告资源获取越权
* default-src限制全局
* 指定资源类型
* [CSP](https://developer.mozilla.org/zh-CN/docs/Glossary/CSP)