# [从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！](http://www.dailichun.com/2018/03/12/whenyouenteraurl.html)
# 大纲
1. 对知识的体系进行一次预评级
2. 为什么说知识体系如此重要?
3. 梳理主干流程
4. 从浏览器接受URL到开启网络请求线程
    * 多线程的浏览器
    * 多线程的浏览器内核
    * 解析URL
    * 网络请求都是单独的线程
    * 更多
5. 开启网络线程到发出一个完整的http请求
    * DNS查询得到IP
    * tcp/ip请求
    * 五层因特网协议栈
6. 从服务器接受到请求到对应后台接受到请求
    * 负载均衡
    * 后台的处理
7.  后台和前台的http交互
    * http报文结构
    * cookie以及优化
    * gzip压缩
    * 长连接与短连接
    * http2.0
    * https
 8. 单独拎出来的缓存问题,http的缓存
    * 强缓存与弱缓存
    * 缓存头部简述
    * 头部的区别
9. 解析页面流程
    * 流程简述
    * HTML解析,构建DOM
    * 生成CSS规则
    * 构建渲染树
    * 渲染
    * 简单层与复合层
    * Chrome中的调式
    * 资源外链的下载
    * loaded和documentLoaded
10. CSS的可视化格式模型
    * 包含块(Containing Block)
    * 控制框(Controlling Box)
    * BFC(Block Formatting Context)
    * IFC(Inline Formatting Context)
    * 其他
 11. JS引擎解析过程
    * JS的解释阶段
    * JS的预处理阶段
    * JS的执行阶段
    * 回收机制
 12. 其他
 13. 总结      
 # 对知识体系进行一次预评估
 ## level3
 * 首先略去那些键盘输入、和操作系统交互、以及屏幕显示原理、网卡等硬件交互之类的(前端向中,很多硬件原理暂时略去)
 * 对浏览器模型有整体概念,知道浏览器是多进程的,浏览器内核是多线程的,清楚进程与线程之间的区别,以及输入URL会开一个新的网络线程。
 * 对从开启网络线程到发出一个完整的http请求中间的过程有所了解(如dns查询、tcp/ip连接、五层英特网协议栈等等,以及一些优化方案,如 dns-prefetch)
 * 对从服务器接受到请求到对应后台接受到请求由一定了解(如负载均衡、安全拦截以及后台代码处理等)
 * 对后台和前台的HTTP交互熟悉(包括http报文结构、场景头部、cookie、跨域、web安全、http缓存、http2.0、https等)
 * 对浏览器接受到http数据包后的解析流程熟悉(包括解析html、词法分析然后解析成dom树、解析css生成css规则树、合并成render树、然后layout、painting渲染、里面可能包括复合图层的合成、GPU绘制、外链处理、加载顺序等)
 * 对JS引擎解析过程熟悉(包括js的解释、预处理、执行上下文、VO、作用域链、this、回收机制等)
## level4
[从输入 URL 到页面加载完成的过程中都发生了什么事情？](http://fex.baidu.com/blog/2014/05/what-happen/)
# 知识体系的重要性
## getComputedStyle
* window.getComputedStyle(elem,null).getPropertyValue('height')可能是值为100px,而且,就算是css上写的是inherit，getComputedStyle也会把它最终计算出来的。不过注意,如果元素的背景透明,那么getComputedStyle获取出来的就是透明的这个背景(因为透明本身也是有效的),而不会是父节点的背景。所以它不一定是最终显示的颜色。
* getComputedStyle会获取当前元素所有最终使用的CSS属性值,window和document.defaultView等价
* getComputedStyle会引起回流,因为它需要获取祖先节点的一些信息进行计算(譬如宽高等),所以用的时候慎用,回流会引起性能问题。然后合适的会话将引导回流、重绘、浏览器渲染原理等等。offsetXXX  scrollXXX  clientXXX  currentStyle等等。
## visibility: hidden和display: none的区别
* 普通回答，一个隐藏，但占据位置，一个隐藏，不占据位置

* 进一步，display由于隐藏后不占据位置，所以造成了dom树的改变，会引发回流，代价较大

* 再进一步，当一个页面某个元素经常需要切换display时如何优化，一般会用复合层优化，或者要求低一点用absolute让其脱离普通文档流也行。然后可以将话题引到普通文档流，absolute文档流，复合图层的区别，

* 再进一步可以描述下浏览器渲染原理以及复合图层和普通图层的绘制区别（复合图层单独分配资源，独立绘制，性能提升，但是不能过多，还有隐式合成等等）
* [详谈层合成(composite)](https://juejin.im/entry/59dc9aedf265da43200232f9)
# 前端向知识的重点
* 核心知识,必须掌握的,也是最基础的,譬如浏览器模型,渲染原理、JS解析过程、JS运行机制等，作为骨架来承载知识体系。
* 重点知识,往往每一块都是一个知识点,而且这些知识点都很重要,譬如http相关、web安全相关、跨域处理等等。
* 拓展知识,这一块可能更多的是了解,稍微实践过,但是认识上可能没有上面那个深刻,譬如五层因特网协议栈,hybrid模式、
移动原生开发、后台开发等等(还要看不同领域。)
# 梳理主干流程
1. 从浏览器接受url到开启网络请求线程(这一部分可以展开浏览器的机制以及进程与线程之间的关系)
2. 开启网络线程到发出一个完整的http请求(这一部分涉及到dns查询、tcp/ip请求、五层因特网协议等知识)
3. 从服务器接受到请求到对应后台就收到请求(这一部分可能涉及到负载均衡、安全拦截以及后台内部处理等等)
4. 后台和前台的http交互(这一部分包括http头部、响应码、报文结构、cookie等知识,还可以提下静态资源的cookie优化。以及编码解密,如gzip压缩等)
5. 单独拎出来的缓存问题,http的缓存(这部分包括http缓存头部,etag,catch-control等)
6. 浏览器接受到http数据包后的解析流程(解析html-词法解析然后解析成dom树、解析css生成css规则树、合并成render树,然后layout、painting渲染、复合图层的合成、GPU绘制、外链资源的处理、loaded和domcontentloaded等)
7. css的可视化格式模型(元素的渲染规则,如包含块、控制框、BFC、IFC等概念)
8. JS引擎解析过程(js的解释阶段、预处理阶段、执行阶段生成执行上下文,VO,作用域链、回收机制等等。)
9. 其他(可以拓展不同的只是模块,如跨域、web安全、hybrid模式等等内容)
# 从浏览器接收url到开启网络请求线程
* 浏览器进程/线程模型    JS的运行机制
## 多进程的浏览器
* 浏览器是多进程的,有一个主控进程,以及每一个tab页面都会新开一个进程(某些情况下多个tab会合并进程)
* 进程可能包含主控进程、插件进程、GPU、tab页(浏览器内核)等等
    * Browser进程：浏览器的主进程(负责协调、主控)，只有一个
    * 第三方插件进程：每种类型的插件对应一个进程,仅当使用该插件时才创建。
    * GPU进程：最多一个,用于3D绘制
    * 浏览器渲染进程(内核):默认每个tab页面一个进程,互不影响、控制页面渲染、脚本执行、事件处理等(有时候会优化,如多个空白tab会合并成一个进程)
### 多进程的浏览器内核
* 每一个tab页面可以看做是浏览器内核进程,然后这个进程是多线程的
    * GUI线程
    * JS线程
    * 事件触发线程
    * 定时器线程
    * 网络请求线程    

    ![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/img/browser_inner_thread.png)

### 解析URL
* 输入URL后，会进行解析(url的本质就是统一资源定位符)
 * URL一般包括几大部分：
     * protocol 协议头 譬如http ftp
     * host  主机域名或ip地址
     * port  端口号
     * path  目录路径
     * query 即查询参数
     * fragment 即 # 后的hash值 一般用来定位到某个位置
### 网络请求都是单独的线程
* 每次网络请求时都需要开辟单独的线程进行,譬如如果URL解析到http协议,就会新建一个网络线程去处理资源下载。
* 因此浏览器会根据解析出的协议,开辟一个网络线程,前往请求资源(这里,暂时理解为是浏览器内核开辟的)
### 更多

[从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理](https://segmentfault.com/a/1190000012925872)     

### 开启网络线程到发出一个完整的HTTP请求
#### DNS查询得到IP
* 如果输入的是域名,需要进行dns解析成ip,大致流程
    * 如果浏览器有缓存,直接使用浏览器缓存,否则使用本机缓存,再没有的话就是用host
    * 如果本地没有，就向DNS域名服务器查选(当然,中间可能还会经过路由,也有缓存等),查询到对应的IP
    * 注意,域名查询时有可能是经过了CDN调度器的(如果有cnd储存功能的话)
    * 而且,需要知道dns解析是很耗时的,因此如果杰行行行域名过多,会让首屏加载变得过慢,可以考虑dns-prefetch优化
 ### tcp/ip请求
 * http的本质就是TCP/IP请求
    * 三次握手的步骤
    * 四次挥手的步骤 (待到断开连接时,需要进行四次挥手,因为是全双工的,所以需要四次挥手)
       * 主动方：我已经关闭了向你那边的主动通道了，只能被动接收了
       * 被动方：收到通道关闭的信息
       * 被动方：那我也告诉你，我这边向你的主动通道也关闭了
        * 主动方：最后收到数据，之后双方无法通信
### tcp/ip的并发限制
* 浏览器对同一个域名下的并发的tcp连接是有限制的(2-10个不等)。
* 在HTTP1.0往往一个资源下载就需要对应一个tcp/ip请求。
### get和post的区别
* get和post虽然本质都是tcp/ip，但是两者除了在http层面外,在tcp/ip层面也有区别
* get会产生一个tcp数据包，post两个
    * get请求时,浏览器会把headers和data一起发送出去,服务器响应200(返回数据)
    * post请求时,浏览器先发送headers,服务器响应100 continue ,浏览器再发送data,服务器响应200(返回数据)。
 * 这里的区别是 specification(规范)层面,而不是implementation(对规范的实现)   
 ## 五层因特网协议栈
* 其实这个概念挺难记全的,记不全没关系,但是要有一个整体概念
* 其实就是一个概念:从客户端发出http请求到服务器接受,中间会进过一系列的流程。
* 从应用层的发送http请求,到传输层通过三次握手建立tcp/ip连接,再到网络层的ip寻址,再到数据链路层的封装成帧,最后到物理层的利用物理介质传输。
* 服务端的接受就是反过来的步骤
* 五层因特网协议栈其实就是:
    * 应用层(dns http)  dns解析成IP并发送http请求
    * 传输层(tcp udp) 建立tcp连接(三次握手)
    * 网络层(IP   ARP) IP 寻址
    * 数据链路层(PPP) 封装成帧
    * 物理层(利用物理介质传输比特流) 物理传输  (然后传输的时候通过双绞线,电磁波等各种介质)
    * 其实也有一个完整的OSI七层框架,与之相比,多了会话层、表示层
    * OSI七层框架 ： 物理层、数据链路层  网络层  传输层、 会话层、 表示层、应用层
    * 表示层:主要处理两个通信系统中交换信息的表示方式,包括数据格式交换,数据加密与解密,数据压缩与终端类型转换等
    * 会话层 ：它具体管理不同用户和进程之间的对话,如控制登录和注销过程
## 从服务端接受到请求到对应后台接受到请求
* 服务端在接受到请求时,内部会进行很多的处理
### 负载均衡
* 对于大型的项目，由于并发访问量很大，所以往往一台服务器是吃不消的，所以一般会有若干台服务器组成一个集群，然后配合反向代理实现负载均衡
* 用户发起的请求都执向调度服务器(反向代理服务器,譬如安装了nginx控制负载均衡),然后调度服务器根据实际的调度算法,分配不同的请求给对应的集群中的服务器执行,然后调度器等待服务器的HTTP响应,并将它反馈给用户。
### 后台处理
* 一般后台都是部署到容器中的,所以一般为：
    * 先是容器接受到请求(如 tomcat容器)
    * 然后对应容器中的后台程序接受到请求(如java程序)
    * 然后就是后台会有自己的统一处理,处理完后响应结果。
* 概况下：
    * 一般有的后台是有统一的验证的,如安全拦截，跨域验证
    * 如果这一步不符合规则,就是直接返回了响应的http报文(如拒绝请求等)
    * 然后当验证通过后,才会进入实际的后台代码,此时是程序接受到请求,然后执行(譬如查询数据库,大量计算等等)
    * 等程序执行完毕后,就会返回一个HTTP响应包(一般这一步也会经过多层封装)
    * 然后就是将这个包从后端发送到前端,完成交互。    
## 后台和前台的http交互
* 前后端交互时,http报文作为信息的载体
### http报文结构
* 报文一般包括了: 通用头部、请求/响应头部    请求/响应体
1. 通用头部
    * Request Url : 请求的Web服务器地址
    * Request Method: 请求方式 < Get  POST  PUT  HEAD  DELETE   CONNECT  TRACE>
    * Status Code :请求的返回状态码,如200 代表成功
    * Remomte Address : 请求的远程服务器地址(会转为IP)
 2. 请求/响应头部   
    * Accept
    * Accept-Encoding
    * Content-Type
    * Cache-Control
    * If-Modified-Since
    * Expires
    * Max-age
    * If-None-Match
    * Cookie
    * Connection
    * Host
    * Origin:最初的请求是从哪里发起的(只会精确到端口)，Origin比Referer更尊重隐私。
    * Referer： 该页面的来源URL(使用于所有类型的请求,会精确到详情页面地址,csr拦截常用到这个字段)
    * User-Agent：用户客户端的一些必要信息,如UA头部等
    * 常用的响应头部(部分):
        * Access-Control-Allow-Headers
        * Access-Control-Allow-Origin
        * Content-Type
        * Date
        * Cache-Control
        * Last-Modified
        * Expires
        * Max-age
        * Etag
        * Set-Cookie
        * Keep-Alive
        * Server
      3. 请求/响应实体
        * http请求时,除了头部,还有消息实体,一般来说，请求实体中会将一些需要的参数都放入(用于post请求)
        *   一般响应实体中，就是放服务端需要传给客户端的内容
        * 一般现在的接口请求时，实体中就是对于的信息的json格式，而像页面请求这种，里面就是直接放了一个html字符串，然后浏览器自己解析并渲染。
     4. CRLF
        * CRLF (Carriage-Return Line-Feed)  意思是回车换行,一般作为分隔符存在
        * 请求头和实体消息之间有一个CRLF分隔,响应头部和响应实体之间用一个CRLF分隔。


![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/img/http_ajax_headers.png)
### cookie以及优化
* cookie是浏览器的一种本地存储方式，一般用来帮助客户端和服务端通信的，常用来进行身份校验，结合服务端的session使用。
    * 在登陆页面，用户登陆了

    * 此时，服务端会生成一个session，session中有对于用户的信息（如用户名、密码等）

    * 然后会有一个sessionid（相当于是服务端的这个session对应的key）

    * 然后服务端在登录页面中写入cookie，值就是:jsessionid=xxx

    * 然后浏览器本地就有这个cookie了，以后访问同域名下的页面时，自动带上cookie，自动检验，在有效时间内无需二次登陆。
* 一般来说,cookie是不允许存放敏感信息的(千万不要明文存储用户名、密码),因为非常不安全,如果一定要强行存储,首先,一定要在cookie中设置httponly(这样就无法通过js操作了)，另外可以考虑rsa等非对称加密(因为实际上,浏览器本地也是容易被攻克的,并不安全)

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/img/cookie%E4%BC%98%E5%8C%96.png)

* 关于cookie的交互

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/img/http_cookie_session.png)

### gzip压缩
* 首先,明确gzip是一种压缩格式,需要浏览器支持才有效(不过一般现在的浏览器都支持),而且gzip压缩效率很好(高达70%)
* 然后gzip一般是由apache tomcat等web服务器开启
* 当然服务器除了gzip外,也还会有其他压缩格式(如 deflate 没有gzip高效,且不流行)
* 所以一般只需要在服务器上开启了gzip压缩,然后之后的请求都是基于gzip压缩格式的,非常方便。
### 长连接与短连接
* 首先看 tcp/ip层面的定义
    * 长连接 : 一个tcp/ip连接上可以连续发送多个数据包,在tcp连接保持期间,如果没有数据包发送,需要双方检测包以维持次连接,一般需要自己做在线维持(类似于心跳包)
    * 短连接：通信双方有数据交互时,就建立一个tcp连接,数据发送完毕后,则断开此tcp连接。
* 在HTTP层面
    *     http1.0中，默认使用的是短连接，也就是说，浏览器每进行一次http操作，就建立一次连接，任务结束就中断连接，譬如每一个静态资源请求时都是一个单独的连接
    * http1.1起，默认使用长连接，使用长连接会有这一行Connection: keep-alive，在长连接的情况下，当一个网页打开完成后，客户端和服务端之间用于传输http的tcp连接不会关闭，如果客户端再次访问这个服务器的页面，会继续使用这一条已经建立的连接
    * 注意： keep-alive不会永远保持，它有一个持续时间，一般在服务器中配置（如apache），另外长连接需要客户端和服务器都支持时才有效
 ### HTTP 2.0
 * 多路由复用(即一个tcp/ip连接可以请求多个资源)
 * 首部压缩(HTTP头部压缩，减少体积)
 * 二进制分帧（在应用层跟传送层之间增加了一个二进制分帧层，改进传输性能，实现低延迟和高吞吐量）
 * 服务器端推送(服务端可以对客户端的一个请求发出多个响应,可以主动通知客户端)
 * 请求优先级（如果流被赋予了优先级，它就会基于这个优先级来处理，由服务器决定需要多少资源来处理该请求。）
 ### https
 * https与http的区别就是： 在请求前，会建立ssl链接，确保接下来的通信都是加密的，无法被轻易截取分析
 * 一般来说，如果要将网站升级成https，需要后端支持（后端需要申请证书等），然后https的开销也比http要大（因为需要额外建立安全链接以及加密等），所以一般来说http2.0配合https的体验更佳（因为http2.0更快了）
 * 一般来说，主要关注的就是SSL/TLS的握手流程，如下（简述）：
    1.  浏览器请求建立SSL链接，并向服务端发送一个随机数–Client random和客户端支持的加密方法，比如RSA加密，此时是明文传输。 
    2.  服务端从中选出一组加密算法与Hash算法，回复一个随机数–Server random，并将自己的身份信息以证书的形式发回给浏览器
（证书里包含了网站地址，非对称加密的公钥，以及证书颁发机构等信息）
   3. 浏览器收到服务端的证书后
      * 用户接收证书后（不管信不信任），浏览会生产新的随机数–Premaster secret，然后证书中的公钥以及指定的加密方法加密`Premaster secret`，发送给服务器。
    
      * 利用Client random、Server random和Premaster secret通过一定的算法生成HTTP链接数据传输的对称加密key-`session key`
    
      * 使用约定好的HASH算法计算握手消息，并使用生成的`session key`对消息进行加密，最后将之前生成的所有信息发送给服务端。 
 4. 服务端收到浏览器的回复

    * 利用已知的加解密方式与自己的私钥进行解密，获取`Premaster secret`
    
    * 和浏览器相同规则生成`session key`
    
    * 使用`session key`解密浏览器发来的握手消息，并验证Hash是否与浏览器发来的一致
    
    * 使用`session key`加密一段握手消息，发送给浏览器
    
5. 浏览器解密并计算握手消息的HASH，如果与服务端发来的HASH一致，此时握手过程结束， 
* [阮一峰-图解SSL/TLS协议](http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html) 
## 单独拎出来的缓存问题,http的缓存
* 前后端的http交互中，使用缓存能很大程度上的提升效率，而且基本上对性能有要求的前端项目都是必用缓存的
### 强缓存与弱缓存
* 缓存可以简单的划分成两种类型 ：强缓存( 200 from cache) 与 协商缓存(304)
* 区别简述如下：
    * 强缓存(200 from cache)时，浏览器如果判断本地缓存未过期,就直接使用,无需发起http请求
    * 协商缓存（304）时，浏览器会向服务端发起http请求，然后服务端告诉浏览器文件未改变，让浏览器使用本地缓存
    *  `对于协商缓存，使用Ctrl + F5强制刷新可以使得缓存无效`

    * `但是对于强缓存，在未过期时，必须更新资源路径才能发起新的请求（更改了路径相当于是另一个资源了，这也是前端工程化中常用到的技巧）`
### 缓存头部简述
* If-None-Match/E-tag、If-Modified-Since/Last-Modified、Cache-Control/Max-Age、Pragma/Expires 
### 头部的区别
* http1.0中的缓存控制
    * Pragma：严格来说，它不属于专门的缓存控制头部，但是它设置no-cache时可以让本地强缓存失效（属于编译控制，来实现特定的指令，主要是因为兼容http1.0，所以以前又被大量应用）

    * Expires：服务端配置的，属于强缓存，用来控制在规定的时间之前，浏览器不会发出请求，而是直接使用本地缓存，注意，Expires一般对应服务器端时间，如Expires：Fri, 30 Oct 1998 14:19:41

    * If-Modified-Since/Last-Modified：这两个是成对出现的，属于协商缓存的内容，其中浏览器的头部是If-Modified-Since，而服务端的是Last-Modified，它的作用是，在发起请求时，如果If-Modified-Since和Last-Modified匹配，那么代表服务器资源并未改变，因此服务端不会返回资源实体，而是只返回头部，通知浏览器可以使用本地缓存。Last-Modified，顾名思义，指的是文件最后的修改时间，而且只能精确到1s以内
 ### http1.1中的缓存控制  
   * Cache-Control：缓存控制头部，有no-cache、max-age等多种取值

   * Max-Age：服务端配置的，用来控制强缓存，在规定的时间之内，浏览器无需发出请求，直接使用本地缓存，注意，Max-Age是Cache-Control头部的值，不是独立的头部，譬如Cache-Control: max-age=3600，而且它值得是绝对时间，由浏览器自己计算

   * If-None-Match/E-tag：这两个是成对出现的，属于协商缓存的内容，其中浏览器的头部是If-None-Match，而服务端的是E-tag，同样，发出请求后，如果If-None-Match和E-tag匹配，则代表内容未变，通知浏览器使用本地缓存，和Last-Modified不同，E-tag更精确，它是类似于指纹一样的东西，基于FileEtag INode Mtime Size生成，也就是说，只要文件变，指纹就会变，而且没有1s精确度的限制。
 ### Max-Age相比Expires？ 
   * Expires使用的是服务器端的时间

   * 但是有时候会有这样一种情况-客户端时间和服务端不同步,那这样，可能就会出问题了，造成了浏览器本地的缓存无用或者一直无法过期
所以一般http1.1后不推荐使用Expires

  * 而Max-Age使用的是客户端本地时间的计算，因此不会有这个问题

 * 因此推荐使用Max-Age。

 * `注意，如果同时启用了Cache-Control与Expires，Cache-Control优先级高。`
 ### E-tag相比Last-Modified？

 * Last-Modified：

    * 表明服务端的文件最后何时改变的

    * 它有一个缺陷就是只能精确到1s，

    * 然后还有一个问题就是有的服务端的文件会周期性的改变，导致缓存失效

* 而E-tag：

    * 是一种指纹机制，代表文件相关指纹

    * 只有文件变才会变，也只要文件变就会变，

    * 也没有精确时间的限制，只要文件一遍，立马E-tag就不一样了

    * `如果同时带有E-tag和Last-Modified，服务端会优先检查E-tag`

    ![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/img/http_cache.png)
  ## 解析页面流程
  ### 流程简述
  * 浏览器内核拿到内容后,渲染步骤大致可以分为以下几步
    1. 解析HTML,构建DOM树
    2. 解析CSS,生成CSS规则树
    3. 合并DOM树和CSS树,生成render树
    4. 布局render树(Layout/reflow) 负责各元素尺寸、位置的计算
    5. 绘制render树(paint) 绘制页面像素信息
    6. 浏览器会将各层的信息发送给GPU,GPU将各层合成(composite),显示在
    屏幕上 

    ![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/img/browser_rending.png)

 ### HTML解析，构建DOM
 * 浏览器解析HTML,构建DOM树。
 * 解析HTML到构建出DOM当然过程可以简述如下：
    * Bytes -> characters -> tokens -> nodes -> DOM
 *  譬如假设有这样一个HTML页面：（以下部分的内容出自参考来源，修改了下格式）


 ```
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="style.css" rel="stylesheet">
    <title>Critical Path</title>
  </head>
  <body>
    <p>Hello <span>web performance</span> students!</p>
    <div><img src="awesome-photo.jpg"></div>
  </body>
</html>
 ```   

 ![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/img/browser_parse_html.png)  

 * 重点过程：
    1. Conversion转换：浏览器将获得的HTML内容（Bytes）基于他的编码转换为单个字符

    2. Tokenizing分词：浏览器按照HTML规范标准将这些字符转换为不同的标记token。每个token都有自己独特的含义以及规则集

    3. Lexing词法分析：分词的结果是得到一堆的token，此时把他们转换为对象，这些对象分别定义他们的属性和规则

    4. DOM构建：因为HTML标记定义的就是不同标签之间的关系，这个关系就像是一个树形结构一样
例如：body对象的父节点就是HTML对象，然后段略p对象的父节点就是body对象
* 最后的DOM树如下：

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/img/browser_parse_dom.png)

### 生成CSS规则
* Bytes → characters → tokens → nodes → CSSOM
```
body { font-size: 16px }
p { font-weight: bold }
span { color: red }
p span { display: none }
img { float: right }

```

* 最终的CSSSOM树就是:


![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/img/browser_parse_cssom.png)

### 构建渲染树
* 当DOM树和CSSOM都有了后，就要开始构建渲染树了
* 一般来说, 渲染树和dom树相对应的,但不是严格意义上的对应
* 因为有一些不可见的dom元素不会插入到渲染树中，如head这种不可见的标签或者 display:none等
* 整体来说可以看图

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/img/browser_parse_rendertree.png)



### 渲染
* 有了render树  接下来就是开始渲染,基本流程如下

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/img/browser_rendingprocess.jpg)
* 图中重要的四个步骤就是：
    1. 计算css样式
    2. 构建渲染树
    3. 布局，主要定位坐标和大小,是否换行,各种position overflow  z-index属性
    4. 绘制,将图像绘制出来
    * 然后,图中的线与箭头代表通过js动态修改了dom或css,导致了重新布局(Layout)或渲染(Repaint)
    * Layout 也称为Reflow 即回流。 一般意味着元素的内容、结构、位置或尺寸发生了变化,需要重新计算样式和渲染树
    * Repaint ,即重绘。意味着元素发生的改变只是影响了元素的一些外观之类的时候(例如,背景色、边框颜色、文字颜色等) 此时只需要应用新样式绘制这个元素就可以了。
    * 回流的成本开销要高于重绘,而且一个节点的回流往往会导致子节点以及同级节点的回流,所以优化方案中一般都包括,尽量避免回流。
 #### 什么会引起回流
   1. 页面渲染初始化
   2. DOM结构改变,比如删除了某个节点
   3. render树变化,比如减少了padding
   4. 窗口resize
   5. 最复杂的一种:获取某些属性,引发回流,很多浏览器会对回流做优化,会等到数量足够时做一次批处理回流
   6. 但是除了render树的直接变化,当获取一些属性时,浏览器为了获得正确的值也会触发回流,这样使得浏览器优化无效,包括
* offset(Top/Left/Width/Height)
* scroll(Top/Left/Width/Height)
* client(Top/Left/Width/Height)
* width,height
* 调用了getComputedStyle()或者IE的currentStyle
* 回流一定伴随着重绘,重绘却可以单独出现
* 所以一般会有一些优化方案,如
    * 减少逐项更改样式,最好一次更改style,或者将样式定义为class并一次性更新
    * 避免循环操作dom,创建一个documentFragment或div,在它上面应用所有DOM操作,最后再把它添加到 window.document
    * 避免多次读取offset等属性。无法避免则将它们缓存到变量
    * 将复杂的元素绝对定位或固定定位,使得它脱离文档流,否则回流代价会很高。
    * 注意：改变字体大小会引发回流

 ```
var s = document.body.style;

s.padding = "2px"; // 回流+重绘
s.border = "1px solid red"; // 再一次 回流+重绘
s.color = "blue"; // 再一次重绘
s.backgroundColor = "#ccc"; // 再一次 重绘
s.fontSize = "14px"; // 再一次 回流+重绘
// 添加node，再一次 回流+重绘
document.body.appendChild(document.createTextNode('abc!'));

 ```   
   #### 简单层与复合层
   * 上述中的渲染中止步于绘制，但实际上绘制这一步也没有这么简单，它可以结合复合层和简单层的概念来讲。
     * 可以认为默认只有一个复合图层，所有的DOM节点都是在这个复合图层下的
     * 如果开启了硬件加速功能，可以将某个节点变成复合图层
     * 复合图层之间的绘制互不干扰,由GPU直接控制
     * 而简单图层中，就算是absolute等布局，变化时不影响整体的回流，但是由于在同一个图层中，仍然是会影响绘制的，因此做动画时性能仍然很低。而复合层是独立的，所以一般做动画推荐使用硬件加速
     * [普通图层和复合图层](https://segmentfault.com/a/1190000012925872#articleHeader16)

   #### Chrome中的调试
   * Chrome的开发者工具中,Performance中可以看到详细的渲染过程

   ![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/img/browser_chrome_debug_1.png)
  ![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/img/browser_chrome_debug_2.png)
#### 资源外链的下载
* 上面介绍了html解析,渲染流程。但实际上,在解析html时,会遇到一些资源连接,此时就需要进行单独处理了。
* 简单起见,这里将遇到的静态资源分为以下几大类(未列举所有)：
    * CSS样式资源
    * JS脚本资源
    * IMG图片类资源
#### 遇到外链时的处理
* 当遇到上述的外链时,单独开启一个下载线程去下载资源(htttp1.1中是每个资源的下载都要开启一个http请求,对应一个http请求,对应一个tcp/ip链接。http1.1默认开启Connection:Keep-alive)    
#### 遇到css样式资源
* css资源的处理有几个特点：
    * css下载是异步,不会阻塞浏览器构建DOM树
    * 但是会阻塞渲染,也就是在构造render树,会等到css下载解析完毕后才进行(这点与浏览器优化有关,防止css规则不断改变,避免了重复的构建。)
    * 有例外, media query声明的CSS是不会阻塞渲染的
####  遇到JS脚本资源
* JS脚本资源的处理有几个特点
    * 阻塞浏览器的解析,也就是说发现一个外链脚本时,需等待脚本下载完成并执行后才会继续解析HTML
    * 浏览器的优化,一般现代浏览器有优化,在脚本阻塞时,也会继续下载其它资源(当然有并发上限),
    * 但是虽然脚本可以并行下载,解析过程仍然是阻塞的,也就是说必须这个脚本执行完毕后才会接下来的解析,并行下载只是一种优化而已。
    * defer与async  普通的脚本是会阻塞浏览器解析的,但是可以加上defer或async属性,这样脚本就变成异步了,可以等到解析完毕后再执行。
    * 注意,defer和async是有区别的：defer是延迟执行,而async是异步执行。
        * async是异步执行,异步下载完毕后就会执行,不确保执行顺序,一定在onload前,但不确定在DOMContentLoaded事件的前或后
        * defer是延迟执行，在浏览器看起来的效果像是将脚本放在了body后面一样（虽然按规范应该是在DOMContentLoaded事件前，但实际上不同浏览器的优化效果不一样，也有可能在它后面）
   #### 遇到img图片类资源
   * 遇到图片等资源时，直接就是异步下载，不会阻塞解析，下载完毕后直接用图片替换原有src的地方
   #### loaded和domcontentloaded
   * DOMContentLoaded事件触发时,仅当DOM加载完成,不包括样式表、图片(譬如如果有async加载的脚本就不一定完成)
   * load事件触发时,页面上所有的DOM,样式表,脚本、图片都已经加载完成了。  
  #### CSS的可视化格式模型
   * CSS中规定每个元素都有自己的盒子模型(相当于规定了这个元素如何显示)
   * 然后可视化格式模型则是把这些盒子按照规则摆放到页面上,也就是如何布局
   * 换句话说,盒子模型规定了怎么在页面里摆放盒子,盒子的相互作用等等。   
   * 说到底： CSS的可视化格式模型就是规定了浏览器在页面中如何处理文档树
   * 另外，CSS有三种定位机制：普通流，浮动，绝对定位，如无特别提及，下文中都是针对普通流中的
   1. 包含块（Containing Block）
   * 一个元素的box的定位和尺寸，会与某一矩形框有关，这个框就称之为包含块。
   * 元素会为它的子孙元素创建包含块，但是，并不是说元素的包含块就是它的父元素，元素的包含块与它的祖先元素的样式等有关系
     * 根元素是最顶端的元素，它没有父节点，它的包含块就是初始包含块
     * static和relative的包含块由它最近的块级、单元格或者行内块祖先元素的内容框（content）创建
     * fixed的包含块是当前可视窗口
     * absolute的包含块由它最近的position 属性为absolute、relative或者fixed的祖先元素创建
        * 如果其祖先元素是行内元素，则包含块取决于其祖先元素的direction特性

        * 如果祖先元素不是行内元素，那么包含块的区域应该是祖先元素的内边距边界
   2.  控制框（Controlling Box）  
   * 块级元素和块框以及行内元素和行框的相关概念
   1. 块框
      * 块级元素会生成一个块框(Block Box)，块框会占据一整行,用来包含子box和生成的内容
      * 块框同时也是一个块包含框(Conteaining Box),里面要么只包含块框,要么只包含行内框(不能混杂),如果块框内部有块级元素也有行内元素,那么行内元素会被匿名块框包围。
      ```
     <DIV>
Some text
<P>More text
</DIV>
      ```
* div生成了一个块框，包含了另一个块框p以及文本内容Some text，此时Some text文本会被强制加到一个匿名的块框里面，被div生成的块框包含（其实这个就是IFC中提到的行框，包含这些行内框的这一行匿名块形成的框，行框和行内框不同）
* 换句话说:如果一个块框在其中包含另外一个块框，那么我们强迫它只能包含块框，因此其它文本内容生成出来的都是匿名块框（而不是匿名行内框）
 2. 行内框
 * 一个行内元素生成一个行内框
 * 行内元素能排在一行,允许左右有其它的元素
 ```
<P>Some <EM>emphasized</EM> text</P>
 ```
 * P元素生成一个块框，其中有几个行内框（如EM），以及文本Some ， text，此时会专门为这些文本生成匿名行内框
 3. display属性的影响
    * block 元素生成一个块框
    * inline 元素产生一个或多个的行内框
    * inline-block  元素产生一个行内级块框,行内块框的内部会被当做块来格式化,而此元素本身会被当做行内级框来格式化
    *  none，不生成框，不再格式化结构中，当然了，另一个visibility: hidden则会产生一个不可见的框
 4. 总结：
    *   如果一个框里，有一个块级元素，那么这个框里的内容都会被当作块框来进行格式化，因为只要出现了块级元素，就会将里面的内容分块几块，每一块独占一行（出现行内可以用匿名块框解决）

   * 如果一个框里，没有任何块级元素，那么这个框里的内容会被当成行内框来格式化，因为里面的内容是按照顺序成行的排列
 4. BFC (Block Formatting Context)
 * FC(格式上下文)
 * FC即格式上下文,它定义框内部的元素渲染规则
    * FC像是一个大箱子，里面装有很多元素
    * 箱子可以隔开里面的元素和外面的元素(所以外部并不会影响FC内部的渲染)
    * 内部的规则可以是:如何定位,宽高计算  margin折叠等等
 * 不同类型的框参与的FC类型不同,譬如块级框对应的BFC,行内框对应IFC
 * 注意,并不是说所有的框都会产生FC,而是符合特定条件才会产生,只有产生了对应的FC后才会应用对应渲染规则。   

 