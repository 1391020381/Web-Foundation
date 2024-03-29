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
## If-Unmodified-Since
* 首部字段If-Unmodified-Since和首部字段If-Modified-Since的作用相反。它的作用是告知服务器,指定的请求资源只有在字段值内指定的日期时间之后,为发生更新的情况下,才能处理请求。如果在指定的日期时间后发生了更新,则以状态码 412 Precondition Failed 作为响应返回。
## Max-Forwards
## Proxy-Authorization 
* Proxy-Authorization: Basic dGlwOjkpNLAGfFY5
* 接收到代理服务器发来的认证质询时,客户端会发送包含首部字段Proxy-Authorization的请求,以告知服务器认证所需要的信息。
* 这个行为是与客户端和服务器之间的HTTP访问认证相类似的,不同之处在于,认证行为发生在客户端与代理之间。客户端与服务器之间的认证,使用首部字段Authorization可起到相同的作用。
## Range
## Referer
* 首部字段Referer会告知服务器请求的原始资源的URI
## TE
* 首部字段TE会告知服务器客户端能够处理响应的传输编码方式及相对优先级。它和首部字段Accept-Encoding的功能很相像，但是用于传输编码。
##  User-Agent
* 首部字段User-Agent会将创建请求的浏览器和用户代理名称等信息传达给服务器。
# 响应首部字段
* 响应首部字段是由服务器向客户端返回响应报文中所使用的字段,用于补充响应的附加信息、服务器信息、以及对客户端的附加要求等。
## Accept-Ranges
* 首部字段Accept-Range是用来告知客户端服务器是否能处理范围请求,以指定获取服务器某个部分的资源。
## Age
* 首部字段 Age 能告知客户端，源服务器在多久前创建了响应。字段值
的单位为秒。
* 若创建该响应的服务器是缓存服务器，Age 值是指缓存后的响应再次
发起认证到认证完成的时间值。代理创建响应时必须加上首部字段
Age。
## ETag
* 首部字段ETag能告知客户端实体标识。它是一种可将资源以字符串形式做唯一标识的方式。服务器会为每份资源分配对应的ETag值。
* 另外,当资源更新时,ETag值也需要更新。生成ETag值时,并没有统一的算法规则,而仅仅是有服务器来分配。
### 强 ETag 值和弱 Tag 值
* 强 ETag 值，不论实体发生多么细微的变化都会改变其值。
* 弱 ETag 值只用于提示资源是否相同。只有资源发生了根本改变，产
生差异时才会改变 ETag 值。这时，会在字段值最开始处附加 W/。
* ETag: W/"usagi-1234"
## Location
* 使用首部字段Location可以将响应接受方引导值某个与请求URI位置不同的资源。
* 基本上,该字段会配合3XX:Redirection的响应,提供重定向的URI
* 几乎所有的浏览器在接收到包含首部字段 Location 的响应后，都会强
制性地尝试对已提示的重定向资源的访问。
## Proxy-Authenticate
* 首部字段Proxy-Authenticate会把由代理服务器所要求的认证信息发送给客户端。
## Retry-After
* 首部字段 Retry-After告知客户端应该多久之后再次发送请求。主要
配合状态码 503 Service Unavailable 响应，或 3xx Redirect 响应一起使用。
## Server
## Vary
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/Vary.png)
## WWW-Authenticate
* WWW-Authenticate: Basic realm="Usagidesign Auth"
* 首部字段 WWW-Authenticate用于HTTP访问认证。它会告知客户端适用于访问请求URI所指定资源的认证方案(Basic或是Digest)和带参数提示的质询(challenge)。状态码 401 Unauthorized 响应中，肯定带有首部字段 WWW-Authenticate。
# 实体首部字段
* 实体首部字段是包含在请求报文和响应报文中的实体部分所使用的首部,用于补充内容的更新时间等于实体相关的信息

## Allow
## Content-Encoding
## Content-Length
## Content-Location
* 首部字段 Content-Location 给出与报文主体部分相对应的 URI。和首
部字段 Location 不同，Content-Location 表示的是报文主体返回资源对
应的 URI。
## Content-MD5
* 首部字段 Content-MD5 是一串由 MD5 算法生成的值，其目的在于检
查报文主体在传输过程中是否保持完整，以及确认传输到达。
## Content-Range
* 针对范围访问,返回响应时使用的首部字段Content-Range，能告知客户端作为响应返回的实体的哪个部分符合范围请求。字段值以字节为单位。
* 表示当前发送部分及整个实体大小。
## Content-Type

## Expires
* 首部字段Expires会将资源失效的日期告知客户端。缓存服务器在接受到含有首部字段Expires的响应后,会以缓存来应答请求,在Expires字段值指定的
时间之前,响应的副本会一直被保存。当超过指定的时间后,缓存服务器在请求发送过来时,会转向源服务器请求资源。
* `当首部字段 Cache-Control 有指定max-age指令时,比起首部字段 Expries，会优先处理 max-age指令。`

## Last-Modified
* 首部字段Last-Modified指明资源最终修改的时间。一般来说,这个值就是Request-URI 指定资源被修改的时间。但类似使用 CGI 脚本进
行动态数据处理时，该值有可能会变成数据最终修改时的时间。
# 为Cookie服务的首部字段
* Cookie的工作机制是用户识别及状态管理。Web网站为了管理用户的状态会通过Web浏览器,把一些数据临时写入用户的计算机内。接着当用户访问该Web网站时,可通过通信方式取回之前发放的Cookie
* 调用 Cookie 时，由于可校验 Cookie 的有效期，以及发送方的域、路径、协议等信息，所以正规发布的 Cookie 内的数据不会因来自其他Web 站点和攻击者的攻击而泄露。

![[](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/Cookie.png)
## Set-Cookie
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/Set-Cookie%20%E5%AD%97%E6%AE%B5%E7%9A%84%E5%B1%9E%E6%80%A7.png)

1. expires属性
* Cookie 的 expires 属性指定浏览器可发送 Cookie 的有效期。
* 当省略 expires 属性时，其有效期仅限于维持浏览器会话（Session）
时间段内。这通常限于浏览器应用程序被关闭之前。
* 另外，一旦 Cookie 从服务器端发送至客户端，服务器端就不存在可
以显式删除 Cookie 的方法。但可通过覆盖已过期的 Cookie，实现对
客户端 Cookie 的实质性删除操作。
2. domain
* 通过 Cookie 的 domain 属性指定的域名可做到与结尾匹配一致。比
如，当指定 example.com 后，除 example.com 以外，www.example.com
或 www2.example.com 等都可以发送 Cookie。
* 因此，除了针对具体指定的多个域名发送 Cookie 之 外，不指定
domain 属性显得更安全。
3. secure 属性
* Cookie 的 secure 属性用于限制 Web 页面仅在 HTTPS 安全连接时，才
可以发送 Cookie。
* 当省略 secure 属性时，不论 HTTP 还是 HTTPS，都会对 Cookie 进行
回收。
4. HttpOnly属性
* Cookie 的 HttpOnly 属性是 Cookie 的扩展功能，它使 JavaScript 脚本
无法获得 Cookie。其主要目的为防止跨站脚本攻击（Cross-site
scripting，XSS）对 Cookie 的信息窃取。
## Cookie
* 首部字段 Cookie 会告知服务器，当客户端想获得 HTTP 状态管理支
持时，就会在请求中包含从服务器接收到的 Cookie。接收到多个
Cookie 时，同样可以以多个 Cookie 形式发送。
# 其他首部字段
* HTTP 首部字段是可以自行扩展的。所以在 Web 服务器和浏览器的应
用上，会出现各种非标准的首部字段。
1. X-Frame-Options
2. X-XSS-Protection
* 首部字段 X-XSS-Protection 属于 HTTP 响应首部，它是针对跨站脚本
攻击（XSS）的一种对策，用于控制浏览器 XSS 防护机制的开关。
首部字段 X-XSS-Protection 可指定的字段值如下。
  * 0 ：将 XSS 过滤设置成无效状态
  * 1 ：将 XSS 过滤设置成有效状态
3. DNT
* 首部字段 DNT 属于 HTTP 请求首部，其中 DNT 是 Do Not Track 的简
称，意为拒绝个人信息被收集，是表示拒绝被精准广告追踪的一种方
法。
* 首部字段 DNT 可指定的字段值如下。
  * 0 ：同意被追踪
  * 1 ：拒绝被追踪
* 由于首部字段 DNT 的功能具备有效性，所以 Web 服务器需要对 DNT
做对应的支持。
4. P3P
