* 主要使用HTTP/1.1版本
# HTTP协议用于客户端和服务端之间的通信
* 请求访问文本或图像等资源的一端称为客户端,而提供资源响应的一端称为服务器。
* 按时间情况,两台计算机作为客户端和服务端的角色有可能互换。而用HTTP协议能够明确区分哪端是客户端,哪端是服务端。
# 通过请求和响应的交换达成通信
* HTTP协议规定,请求从客户端发出,最后服务端响应该请求并返回。
1. 请求报文

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E8%AF%B7%E6%B1%82%E6%8A%A5%E6%96%87%E7%9A%84%E6%9E%84%E6%88%90.png)

2. 响应报文

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E5%93%8D%E5%BA%94%E6%8A%A5%E6%96%87%E7%9A%84%E6%9E%84%E6%88%90.png)

## HTTP不保存状态的协议

* HTTP是一种不保存状态,即无状态(stateless)协议。HTTP协议自身不对请求和响应之间的通信状态进行保存。也就是说在HTTP这个级别,协议对于发送过的请求或响应都不做持久化处理。
* 使用 HTTP 协议，每当有新的请求发送时，就会有对应的新响应产生。协议本身并不保留之前一切的请求或响应报文的信息。这是为了更快地处理大量事务，确保协议的可伸缩性，而特意把 HTTP 协议设计成如此简单的。
* HTTP/1.1 虽然是无状态协议，但为了实现期望的保持状态功能，于是引入了 Cookie 技术。有了 Cookie 再用 HTTP 协议通信，就可以管理状态了
## 请求 URI 定位资源

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E5%9C%A8%E8%AF%B7%E6%B1%82%E4%B8%AD%E6%8C%87%E5%AE%9AURI.png)

## 告知服务器意图的 HTTP 方法
1. GET: 获取资源
2. POST: 传输实体主体
3. PUT: 传输文件
* PUT 方法用来传输文件。就像 FTP 协议的文件上传一样，要求在请求报文的主体中包含文件内容，然后保存到请求 URI 指定的位置。
但是，鉴于 HTTP/1.1 的 PUT 方法自身不带验证机制，任何人都可以上传文件 , 存在安全性问题，因此一般的 Web 网站不使用该方法。若配合 Web 应用程序的验证机制，或架构设计采用REST（REpresentational State Transfer，表征状态转移）标准的同类Web 网站，就可能会开放使用 PUT 方法。
4. HEAD: 获得报文首部
* HEAD方法和GET方法一样,只是不返回报文主体部分。用于确认URI的有效性及资源更新的日期时间等。
5. DELETE:删除文件
* 和PUT方法一样一般不使用。
6. OPTIONS:询问支持的方法
* OPTIONS:用来查询针对请求URI指定资源支持的方法。
7. TRACE:追踪路径
8. CONNECT：要求用隧道协议连接代理
* CONNECT 方法要求在与代理服务器通信时建立隧道，实现用隧道协议进行 TCP 通信。主要使用 SSL（Secure Sockets Layer，安全套接层）和 TLS（Transport Layer Security，传输层安全）协议把通信内容加 密后经网络隧道传输。
## 使用方法下达命令
* 向请求 URI 指定的资源发送请求报文时，采用称为方法的命令。方法的作用在于，可以指定请求的资源按期望产生某种行为。方法中有 GET、POST 和 HEAD 等。
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/HTTP-Method.png)

## 持久连接节省通信量
* HTTP 协议的初始版本中，每进行一次 HTTP 通信就要断开一次 TCP连接。
### 持久连接
* 为解决上述 TCP 连接的问题，HTTP/1.1 和一部分的 HTTP/1.0 想出了持久连接（HTTP Persistent Connections，也称为 HTTP keep-alive 或HTTP connection reuse）的方法。持久连接的特点是，只要任意一端没有明确提出断开连接，则保持 TCP 连接状态。
* 在 HTTP/1.1 中，所有的连接默认都是持久连接，但在 HTTP/1.0 内并未标准化。虽然有一部分服务器通过非标准的手段实现了持久连接但服务器端不一定能够支持持久连接。毫无疑问，除了服务器端，客户端也需要支持持久连接。