* HTTP协议的请求和响应报文中必定包含HTTP首部。
# HTTP报文首部
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/HTTP%E6%8A%A5%E6%96%87%E7%9A%84%E7%BB%93%E6%9E%84.png)
## HTTP请求报文

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/HTTP%E8%AF%B7%E6%B1%82%E6%8A%A5%E6%96%87.png)
## HTTP响应报文

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/HTTP%E5%93%8D%E5%BA%94%E6%8A%A5%E6%96%87.png)
# HTTP首部字段

## HTTTP首部字段传递重要信息
* 使用首部字段是为了给浏览器和服务器提供报文主体大小、所使用的语言、认证信息等内容。

## HTTP 首部字段结构
* HTTP首部字段是由首部字段名和字段值构成的,中间用冒号':'分隔
* 首部字段名: 字段值
* 另外,字段值对应单个HTTP首部字段可以有多个值
* Keep-Alive : timeout = 15,max = 100

### 若HTTP首部字段重复了会如何
*  当 HTTP 报文首部中出现了两个或两个以上具有相同首部字段名时会怎么样？这种情况在规范内尚未明确，根据浏览器内部处理逻辑的不同，结果可能并不一致。有些浏览器会优先处理第一次出现的首部字段，而有些则会优先处理最后出现的首部字段。
### 4 种 HTTP 首部字段类型
1. 通用首部字段（General Header Fields）
* 请求报文和响应报文两方都会使用的首部。
2. 请求首部字段（Request Header Fields）
* 从客户端向服务器端发送请求报文时使用的首部。补充了请求的附加内容、客户端信息、响应内容相关优先级等信息。
3. 响应首部字段（Response Header Fields）
* 从服务器端向客户端返回响应报文时使用的首部。补充了响应的附加内容，也会要求客户端附加额外的内容信息。
4. 实体首部字段（Entity Header Fields）
* 针对请求报文和响应报文的实体部分使用的首部。补充了资源内容更新时间等与实体有关的信息。
## HTTP/1.1 首部字段一览
* 通用首部字段

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E9%80%9A%E7%94%A8%E9%A6%96%E9%83%A8%E5%AD%97%E6%AE%B5.png)

* 请求首部字段
* Accept: 用户代理可处理的媒体类型
* Accept-Charset: 优先的字符集
* Accept-Encoding:优先的内容编码
* Host: 请求资源所在的服务器
* If-Match: 比较实体标记(ETag)
* If-Modified-Since: 比较资源的更新时间
* If-None-Match :比较实体标记(与If-Match相反)
* If-Unmodified-Since :比较资源的更新时间(与If-Modified-Since相反)
* Referer: 对请求中的URI的原始获取方。
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E8%AF%B7%E6%B1%82%E9%A6%96%E9%83%A8%E5%AD%97%E6%AE%B5.png)

* 响应首部字段
* ETag： 资源的匹配信息

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E5%93%8D%E5%BA%94%E9%A6%96%E9%83%A8%E5%AD%97%E6%AE%B5.png)

* 实体首部字段
* Content-length: 实体主体的大小(单位字节)
* Expires :  实体主体过期的日期时间
* Last-Mofified: 资源的最后修改日期时间
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E5%AE%9E%E4%BD%93%E9%A6%96%E9%83%A8.png)

## 非HTTP/1.1首部字段
* 在 HTTP 协议通信交互中使用到的首部字段，不限于 RFC2616 中定义的 47 种首部字段。还有 Cookie、Set-Cookie 和 Content-Disposition等在其他 RFC 中定义的首部字段，它们的使用频率也很高。
* 这些非正式的首部字段统一归纳在 RFC4229 HTTP Header Field Registrations 中。
## End-to-end 首部和 Hop-by-hop 首部
* HTTP 首部字段将定义成缓存代理和非缓存代理的行为，分成 2 种类型。
1. 端到端首部（End-to-end Header）
   * 分在此类别中的首部会转发给请求 / 响应对应的最终接收目标，且必
   须保存在由缓存生成的响应中，另外规定它必须被转发。
2. 逐跳首部（Hop-by-hop Header）
   * 分在此类别中的首部只对单次转发有效，会因通过缓存或代理而不再
   转发。HTTP/1.1 和之后版本中，如果要使用 hop-by-hop 首部，需提
   供 Connection 首部字段。
3. 下面列举了 HTTP/1.1 中的逐跳首部字段。除这 8 个首部字段之外，
   其他所有字段都属于端到端首部。
  * Connection
  * Keep-Alive
  * Proxy-Authenticate
  * Proxy-Authorization
  *  Trailer
  * TE
  * Transfer-Encoding
  * Upgrade
# HTTP/1.1 通用首部字段
* 通用首部字段是指，请求报文和响应报文双方都会使用的首部。
## Cache-Control
* 通过指定首部字段 Cache-Control 的指令，就能操作缓存的工作机制。
* 指令的参数是可选的，多个指令之间通过“,”分隔。首部字段 Cache-
  Control 的指令可用于请求及响应时。
* Cache-Control: private, max-age=0, no-cache
### Cache-Control 指令一览
  * 可用的指令按请求和响应分类如下所示。

