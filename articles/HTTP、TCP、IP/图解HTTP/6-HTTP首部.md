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

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/Cache-Controll%E6%8C%87%E4%BB%A4%E4%B8%80%E8%A7%88.png)

* no-cache 指令
    * 使用 no-cache指令的目的是为了防止从缓存中返回过期的资源
    * 客户端发送的请求中如果包含 no-cache 指令，则表示客户端将不会接
      收缓存过的响应。于是，“中间”的缓存服务器必须把客户端请求转发
      给源服务器。
    * 如果服务器返回的响应中包含 no-cache 指令，那么缓存服务器不能对
       资源进行缓存。源服务器以后也将不再对缓存服务器请求中提出的资
       源有效性进行确认，且禁止其对响应资源进行缓存操作。
* Cache-Control: no-cache = Location
    *  由服务器返回的响应中，若报文首部字段 Cache-Control 中对 no-cache
       字段名具体指定参数值，那么客户端在接收到这个被指定参数值的首
       部字段对应的响应报文后，就不能使用缓存。换言之，无参数值的首
       部字段可以使用缓存。只能在响应指令中指定该参数。
* no-store 指令
     * 当使用 no-store 指令  1 时，暗示请求（和对应的响应）或响应中包含
       机密信息。
     * 因此，该指令规定缓存不能在本地存储请求或响应的任一部分。
*  max-age 指令
     *  当客户端发送的请求中包含 max-age 指令时，如果判定缓存资源的缓
        存时间数值比指定时间的数值更小，那么客户端就接收缓存的资源。
        另外，当指定 max-age 值为 0，那么缓存服务器通常需要将请求转发
        给源服务器。
     *  当服务器返回的响应中包含 max-age 指令时，缓存服务器将不对资源
        的有效性再作确认，而 max-age 数值代表资源保存为缓存的最长时
        间。
     *  应用 HTTP/1.1 版本的缓存服务器遇到同时存在 Expires 首部字段的情
        况时，会优先处理 max-age 指令，而忽略掉 Expires 首部字段。而
        HTTP/1.0 版本的缓存服务器的情况却相反，max-age 指令会被忽略掉
* 从字面意思上很容易把 no-cache 误解成为不缓存，但事实上 no-cache 代表不缓
  存过期的资源，缓存会向源服务器进行有效期确认后处理资源，也许称为 do-not-
  serve-from-cache-without-revalidation 更合适。no-store 才是真正地不进行缓存
  ### Connection
  1. Connection 首部字段具备如下两个作用
    * 控制不再转发给代理的首部字段
        * Connection: 不再转发的首部字段名
    * 管理持久连接
        * Connection: close
        * HTTP/1.1 版本的默认连接都是持久连接。为此，客户端会在持
          久连接上连续发送请求。当服务器端想明确断开连接时，则指定
          Connection 首部字段的值为 Close。
         *  HTTP/1.1 之前的 HTTP 版本的默认连接都是非持久连接。为
            此，如果想在旧版本的 HTTP 协议上维持持续连接，则需要指定
            Connection 首部字段的值为 Keep-Alive。
### Date
* 首部字段Date表明创建HTTP报文的日期和时间。
### Pragma
* Pragma 是 HTTP/1.1 之前版本的历史遗留字段，仅作为与 HTTP/1.0
  的向后兼容而定义。
* 该首部字段属于通用首部字段，但只用在客户端发送的请求中。客户
  端会要求所有的中间服务器不返回缓存的资源。
* 所有的中间服务器如果都能以 HTTP/1.1 为基准，那直接采用 Cache-
  Control: no-cache 指定缓存的处理方式是最为理想的。但要整体掌握
  全部中间服务器使用的 HTTP 协议版本却是不现实的。因此，发送的
  请求会同时含有下面两个首部字段。
    * Cache-Control: no-cache
    * Pragma: no-cache
### Trailer
* 首部字段 Trailer 会事先说明在报文主体后记录了哪些首部字段。该
  首部字段可应用在 HTTP/1.1 版本分块传输编码时。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/Trailer.png)

###  Transfer-Encoding
* 首部字段 Transfer-Encoding 规定了传输报文主体时采用的编码方式。
### Upgrade
* 首部字段 Upgrade 用于检测 HTTP 协议及其他协议是否可使用更高的
  版本进行通信，其参数值可以用来指定一个完全不同的通信协议。
### Via
* 使用首部字段 Via 是为了追踪客户端与服务器之间的请求和响应报文
  的传输路径。
* 报文经过代理或网关时，会先在首部字段 Via 中附加该服务器的信
  息，然后再进行转发。这个做法和 traceroute 及电子邮件的 Received
  首部的工作机制很类似。
* 首部字段 Via 不仅用于追踪报文的转发，还可避免请求回环的发生。
  所以必须在经过代理时附加该首部字段内容。
### Warning
* HTTP/1.1 的 Warning 首部是从 HTTP/1.0 的响应首部（Retry-After）演
  变过来的。该首部通常会告知用户一些与缓存相关的问题的警告。
# 请求首部字段
* 请求首部字段是从客户端往服务器端发送请求报文中所使用的字段，
  用于补充请求的附加信息、客户端信息、对响应内容相关的优先级等
  内容。
## Accept
* Accept 首部字段可通知服务器，用户代理能够处理的媒体类型及媒体
  类型的相对优先级。可使用 type/subtype 这种形式，一次指定多种媒
  体类型。
* 常见媒体类型
    * 文本文件
        * text/html，text/plain, text/css
        * application/xhtml+xml, application/xml
    * 图片文件
        * image/jpeg,image/gif,image/png
    * 视频文件
        * video/mpeg, video/quicktime
    *  应用程序使用的二进制文件
        *  application/octet-stream, application/zip
## Accept-Charset
   * Accept-Charset 首部字段可用来通知服务器用户代理支持的字符集及
      字符集的相对优先顺序。另外，可一次性指定多种字符集。与首部字
      段 Accept 相同的是可用权重 q 值来表示相对优先级。
   * 该首部字段应用于内容协商机制的服务器驱动协商。
## Accept-Encoding
1. gzip
   * 由文件压缩程序 gzip（GNU zip）生成的编码格式
   （RFC1952），采用 Lempel-Ziv 算法（LZ77）及 32 位循环冗余
   校验（Cyclic Redundancy Check，通称 CRC）。
2. compress
   * 由 UNIX 文件压缩程序 compress 生成的编码格式，采用 Lempel-
   Ziv-Welch 算法（LZW）。
3. deflate
   * 组合使用 zlib 格式（RFC1950）及由 deflate 压缩算法
   （RFC1951）生成的编码格式。
4.  identity
   * 不执行压缩或不会变化的默认编码格式
* 采用权重 q 值来表示相对优先级，这点与首部字段 Accept 相同。另
   外，也可使用星号（*）作为通配符，指定任意的编码格式。
## Accept-Language
## Authorization
* 首部字段 Authorization 是用来告知服务器，用户代理的认证信息（证
  书值）。通常，想要通过服务器认证的用户代理会在接收到返回的
  401 状态码响应后，把首部字段 Authorization 加入请求中。共用缓存
  在接收到含有 Authorization 首部字段的请求时的操作处理会略有差
  异。
  ## Expect
  ## From
  ## Host

  ![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/Host.png)
## If-Match
`形如 If-xxx 这种样式的请求首部字段，都可称为条件请求。服务器接
 收到附带条件的请求后，只有判断指定条件为真时，才会执行请求。`

 ![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/If-Match.png)

## If-Modified-Since
* 如果在  If-Modified-Since字段指定的日期时间后,资源发生了更新,服务器会接受请求。
* 首部字段 If-Modified-Since，属附带条件之一，它会告知服务器若 If-
  Modified-Since 字段值早于资源的更新时间，则希望能处理该请求。
  而在指定 If-Modified-Since 字段值的日期时间之后，如果请求的资源
  都没有过更新，则返回状态码 304 Not Modified 的响应。
* If-Modified-Since 用于确认代理或客户端拥有的本地资源的有效性。
  获取资源的更新日期时间，可通过确认首部字段 Last-Modified 来确
  定。
  ## If-None-Match
  * 首部字段 If-None-Match 属于附带条件之一。它和首部字段 If-Match
作用相反。用于指定 If-None-Match 字段值的实体标记（ETag）值与
请求资源的 ETag 不一致时，它就告知服务器处理该请求。
* 在 GET 或 HEAD 方法中使用首部字段 If-None-Match 可获取最新的资
源。因此，这与使用首部字段 If-Modified-Since 时有些类似。
## If-Range
1. If-Range字段值若是跟ETag值或更新的日期时间匹配一致,那么就作为范围请求处理。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/If-Range.png)

2. 如果不使用首部字段If-Range则需要进行两次处理


![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/Range.png)


