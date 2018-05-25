# 消除 HTTP 瓶颈的 SPDY
## HTTP 的瓶颈
1. 一条连接上只可发送一个请求
2. 请求只能从客户端开始。客户端不可以接受出响应以外的指令
3. 请求/响应首部未经压缩据发送。首部信息越多延迟越大
4. 发送冗长的首部。每次相互发送相同的首部造成的浪费较多。
5. 可任意选择数据压缩格式。非强制压缩发送。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E4%BB%A5%E5%89%8D%E7%9A%84%20HTTP%20%E9%80%9A%E4%BF%A1.png)

## Ajax 的解决方法
* 而利用 Ajax 实时地从服务器获取内容，有可能会导致大量请求产生。另外，Ajax 仍未解决 HTTP 协议本身存在的问题。
## Comet 的解决方法

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/Comet%20%E9%80%9A%E4%BF%A1.png)

# SPDY 的设计与功能
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/SPDY%20%E7%9A%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%8A%9F%E8%83%BD.png)

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E4%BD%BF%E7%94%A8%20SPDY%20%E5%90%8E%EF%BC%8CHTTP%20%E5%8D%8F%E8%AE%AE%E9%A2%9D%E5%A4%96%E8%8E%B7%E5%BE%97%E4%BB%A5%E4%B8%8B%E5%8A%9F%E8%83%BD.png)

## SPDY 消除 Web 瓶颈了吗
* 因为 SPDY 基本上只是将单个域名（ IP 地址）的通信多路复用，所
以当一个 Web 网站上使用多个域名下的资源，改善效果就会受到限
制。
* SPDY 的确是一种可有效消除 HTTP 瓶颈的技术，但很多 Web 网站存
在的问题并非仅仅是由 HTTP 瓶颈所导致。对 Web 本身的速度提
升，还应该从其他可细致钻研的地方入手，比如改善 Web 内容的编
写方式等


# 使用浏览器进行全双工通信的WebSocket
* 一旦 Web 服务器与客户端之间建立起 WebSocket 协议的通信连接，
之后所有的通信都依靠这个专用协议进行。通信过程中可互相发送
JSON、XML、HTML 或图片等任意格式的数据。
* 由于是建立在 HTTP 基础上的协议，因此连接的发起方仍是客户端，
而一旦确立 WebSocket 通信连接，不论服务器还是客户端，任意一方
都可直接向对方发送报文。
* WebSocket 协议的主要特点:
    * 推送功能
        * 支持由服务器向客户端推送数据的推送功能。这样，服务器可直接发送数据，而不必等待客户端的请求
     * 减少通信量
        *   只要建立起 WebSocket 连接，就希望一直保持连接状态。和 HTTP 相比，不但每次连接时的总开销减少，而且由于 WebSocket 的首部信息很小，通信量也相应减少了。 

   * 为了实现 WebSocket 通信，在 HTTP 连接建立之后，需要完成一次“握手”（Handshaking）的步骤。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/WebSocket%E6%8F%A1%E6%89%8B%E5%93%8D%E5%BA%94.png)

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/WebSocket%E6%8F%A1%E6%89%8B%E8%AF%B7%E6%B1%82.png)



* JavaScript调用WebSocket
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/JavaScript%20%E5%8F%AF%E8%B0%83%E7%94%A8%E2%80%9CThe%20WebSocket.png)

# 期盼已久的 HTTP/2.0       
* HTTP/2.0 在 2014 年 11 月实现标准化。
* HTTP/2.0特点

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/HTTP2%E7%9A%84%E7%89%B9%E7%82%B9.png)

# WebDAV 