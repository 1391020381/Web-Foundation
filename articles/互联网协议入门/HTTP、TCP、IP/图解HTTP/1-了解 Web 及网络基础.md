# 使用 HTTP 协议访问 Web
* RFC1945 - Hypertext Transfer Protocol -- HTTP/1.0
* RFC2616 - Hypertext Transfer Protocol -- HTTP/1.1s
* RFC有一些用来制定 HTTP 协议技术标准的文档，它们被称为
  RFC（Request for Comments，征求修正意见书
* 通过发送请求获取服务器资源的Web浏览器等,都可以称为客户端(client)。
* Web使用一种名为HTTP(HyperText Transfer Protocol,超文本传输协议)的协议作为规范,来完成从客户端到服务端等一系列运作流程。而协议是指规则的约定。可以说,Web是建立在HTTP协议上通信的。
# HTTP的诞生
## 为知识共享而规划 Web
* HTML  HTTP  URL
## 网络基础 TCP/IP
* 为了理解HTTP,我们有必要事先了解一下TCP/IP协议族。
* 通常使用的网络(包括互联网)是在TCP/IP协议族的基础上运作的。而HTTP属于它内部的一个子集。
### TCP/IP 协议族
* 计算机与网络设备要相互通信，双方就必须基于相同的方法。比如，
  如何探测到通信目标、由哪一边先发起通信、使用哪种语言进行通
  信、怎样结束通信等规则都需要事先确定。不同的硬件、操作系统之
  间的通信，所有的这一切都需要一种规则。而我们就把这种规则称为
  协议（protocol）。
* 把与互联网相关联的协议集合起来总称为 TCP/IP。也有说法
  认为，TCP/IP 是指 TCP 和 IP 这两种协议。还有一种说法认为，TCP/
  IP 是在 IP 协议的通信过程中，使用到的协议族的统称。
### TCP/IP的分层管理
* 分层的好处：各层之间的接口部分规划好之后,每个层次内部的设计就能够自由改动了。
* 分为以下几层：应用层、传输层、网络层和数据链路层。
1. 应用层
* 应用层决定了向用户提供应用服务时通信的活动。
* TCP/IP 协议族内预存了各类通用的应用服务。比如，FTP（File
  Transfer Protocol，文件传输协议）和 DNS（Domain Name System，域
  名系统）服务就是其中两类。
2. 传输层
* 传输层对上层应用层,提供处于网络连接中的两台计算机之间的数据传输。
* 在传输层有两个性质不同的协议：TCP（Transmission Control
  Protocol，传输控制协议）和 UDP（User Data Protocol，用户数据报
  协议）。
3. 网络层
* 网络层用来处理在网络上流动的数据包。数据包是网络传输的最小数据单位。该层规定了通过怎样的路径（所谓的传输路线）到达对方计算机，并把数据包传送给对方。
* 与对方计算机之间通过多台计算机或网络设备进行传输时，网络层所起的作用就是在众多的选项内选择一条传输路线。
4. 数据链路层
* 用来处理连接网络的硬件部分。
### TCP/IP 通信传输流
![TCP/IP 通信传输流](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/TCP%E3%80%81IP%E9%80%9A%E4%BF%A1%E4%BC%A0%E8%BE%93%E6%B5%81.png)

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/encapsulate.png)
* 利用TCP/IP协议族进行网络通信时,会通过分层顺序与对方进行通信。发送端从应用层往下走,接受端则往应用层往上走。
1. 我们用HTTP举例来说明,首先作为发送端的客户端在应用层(HTTP协议)发出一个想看某个Web页面的HTTP请求。
2. 接着,为了传输方便,在传输层(TCP协议)把从应用层出收到的数据(HTTP请求报文)进行分割,并在各个报文上打上标记序号及端口号后转发给网络层。
3. 在网络层(IP协议),增加作为通信目的地的MAC地址后转发给链路层。这样一来,发往网络的通信请求就准备齐全了。
4. 接受端的服务器在链路层接受到数据,按序往上层发送,一直到应用层。当传输到应用层,才能算真正接受到右客户端发送过来的HTTP请求。
## 与 HTTP 关系密切的协议 : IP、TCP 和DNS
### 负责传输的IP协议
* IP(Internet Protocol) 网际协议位于网络层。
* 几乎所有使用网络的系统都会用到IP协议。
* IP协议的作用是把各种数据包传送给对方。而要保证确实传送到对方那里,则需要满足各类条件。其中两个重要的条件是IP地址和MAC地址(Media Access Control Address)
* IP地址指明了节点被分配的地址,MAC地址是指网卡所属的固定地址。IP地址可以和MAC地址进行配对。IP地址可变换,但MAC地址基本不会更改。
* 使用 ARP 协议凭借 MAC 地址进行通信
* ARP 协议（Address Resolution Protocol）。ARP 是一种用以解析地址的协议，根据通信方的 IP 地址就可以反查出对应的 MAC 地址。
# 没有人能够全面掌握互联网中的传输状况
* 在到达通信目标前的中转过程中，那些计算机和路由器等网络设备只
  能获悉很粗略的传输路线。
* 这种机制称为路由选择（routing），有点像快递公司的送货过程。想
  要寄快递的人，只要将自己的货物送到集散中心，就可以知道快递公
  司是否肯收件发货，该快递公司的集散中心检查货物的送达地址，明
  确下站该送往哪个区域的集散中心。接着，那个区域的集散中心自会
  判断是否能送到对方的家中。
* 我们是想通过这个比喻说明，无论哪台计算机、哪台网络设备，它们
  都无法全面掌握互联网中的细节。
###  确保可靠性的 TCP 协议
* 按层次分,TCP位于传输层,提供可靠的字节流服务。
* TCP协议为了更容易传送大数据才把数据分割,而且TCP协议确认数据最终是否送到对方。
* 为了准确无误地将数据送达目标处，TCP 协议采用了三次握手（three-way handshaking）策略。
* 握手过程中使用了TCP的标志(flag) ——SYN(synchronize) 和ACK(acknowledgement)

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B.png)
### 负责域名解析的 DNS 服务
* DNS(Domain Name System)服务是HTTP协议一样位于应用层的协议。它提供域名到IP地址之间的解析服务。
* 计算机既可以被赋予IP地址,也可以被赋予主机名和域名。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/DSN%E6%9C%8D%E5%8A%A1.png)

### 各种协议与 HTTP 协议的关系
* 我们再通过这张图来了解下 IP 协议、TCP 协议和 DNS 服务在使用HTTP 协议的通信过程中各自发挥了哪些作用。
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/IP%20%E5%8D%8F%E8%AE%AE%E3%80%81TCP%20%E5%8D%8F%E8%AE%AE%E5%92%8C%20DNS%20%E6%9C%8D%E5%8A%A1%E5%9C%A8%E4%BD%BF%E7%94%A8%20HTTP%20%E5%8D%8F%E8%AE%AE%E7%9A%84%E9%80%9A%E4%BF%A1%E8%BF%87%E7%A8%8B%E4%B8%AD%E5%90%84%E8%87%AA%E5%8F%91%E6%8C%A5%E4%BA%86%E5%93%AA%E4%BA%9B%E4%BD%9C%E7%94%A8.png)
### URI 和 URL
* URI 是 Uniform Resource Identifier 的缩写。
* URI 就是由某个协议方案表示的资源的定位标识符。协议方案是指访问资源所使用的协议类型名称。
* URL 是URI的子集
#### URI 的格式
* 采用 HTTP 协议时，协议方案就是 http。除此之外，还有 ftp、mailto、telnet、file 等。标准的 URI 协议方案有 30 种左右，
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/URI%E7%9A%84%E6%A0%BC%E5%BC%8F.png)


