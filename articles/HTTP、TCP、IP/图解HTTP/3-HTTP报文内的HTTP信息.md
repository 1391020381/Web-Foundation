# HTTP报文
* 用于HTTP协议交互的信息被称为HTTP报文。请求端(客户端)的HTTP报文叫请求报文,响应端(服务端)的叫响应报文。HTTP报文本身是
由多行(用CR+LF作换行符)数据构成的字符串文本。
* HTTP报文大致可分为报文首部和报文主体两块。两者由最初出现的空行(CR+LF)来划分。通常，不一定要报文主体。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/HTTP%E6%8A%A5%E6%96%87%E7%BB%93%E6%9E%84.png)
# 请求报文及响应报文的结构
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E8%AF%B7%E6%B1%82%E6%8A%A5%E6%96%87%E5%8F%8A%E5%93%8D%E5%BA%94%E6%8A%A5%E6%96%87%E7%9A%84%E7%BB%93%E6%9E%84.png)

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP、TCP、IP/img/请求报文（上）和响应报文（下）的实例.png)

# 编码提升传输速率
* HTTP 在传输数据时可以按照数据原貌直接传输，但也可以在传输过程中通过编码提升传输速率。通过在传输时编码，能有效地处理大量的访问请求。但是，编码的操作需要计算机来完成，因此会消耗更多的 CPU 等资源。
## 报文(message)
* 是 HTTP 通信中的基本单位，由 8 位组字节流（octet sequence，其中 octet 为 8 个比特）组成，通过 HTTP 通信传输。
## 实体(entity)
* 作为请求或响应的有效载荷数据(补充项)被传输,其内容由实体首部和实体主体组成。
* 通常,报文主体等于实体主体。只有当传输进行编码操作时,实体主体的内容发生变化,才导致它和报文主体产生差异。
## 压缩传输的内容编码
* HTTP 协议中有一种被称为内容编码的功能也能进行类似的操作。
* 内容编码指明应用在实体内容上的编码格式，并保持实体信息原样压缩。内容编码后的实体由客户端接收并负责解码。
## `常用的内容编码有以下几种`
1. gzip(GNU zip)
2. compress (UNI系统的标准压缩)
3. deflate (zlib)
4. identity (不进行编码)
## 分割发送的分块传输编码
* 在 HTTP 通信过程中，请求的编码实体资源尚未全部传输完成之前，浏览器无法显示请求页面。在传输大容量数据时，`通过把数据分割成多块，能够让浏览器逐步显示页面`。
* 这种把实体主体分块的功能称为分块传输编码（Chunked Transfer
  Coding）。
* HTTP/1.1 中存在一种称为传输编码（Transfer Coding）的机制，它可以在通信时按某种编码方式传输，但只定义作用于分块传输编码中。
# 发送多个数据的多部分对象集合
* 发送邮件时，我们可以在邮件里写入文字并添加多份附件。这是因为采用了 MIME（Multipurpose Internet Mail Extensions，多用途因特网邮件扩展）机制，它允许邮件处理文本、图片、视频等多个不同类型的数据。例如，图片等二进制数据以 ASCII 码字符串编码的方式指明，就是利用 MIME 来描述标记数据类型。而在 MIME 扩展中会使用一种称为多部分对象集合（Multipart）的方法，来容纳多份不同类型的数据。
* 相应地，HTTP 协议中也采纳了多部分对象集合，发送的一份报文主体内可含有多类型实体。通常是在图片或文本文件等上传时使用。
* 多部分对象集合包含的对象如下：
1. multipart/form-data   在Web表单文件上传时使用
2. multipart/byteranges   状态码 206（Partial Content，部分内容）响应报文包含了多个范围的内容时使用。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E5%A4%9A%E9%83%A8%E5%88%86%E5%AF%B9%E8%B1%A1%E9%9B%86%E5%90%88%E5%8C%85%E5%90%AB%E7%9A%84%E5%AF%B9%E8%B1%A1.png)

* 在 HTTP 报文中使用多部分对象集合时，需要在首部字段里加上Content-type。
* 使用 boundary 字符串来划分多部分对象集合指明的各类实体。在boundary 字符串指定的各个实体的起始行之前插入“--”标记（例如：--AaB03x、--THIS_STRING_SEPARATES），而在多部分对象集合对应的字符串的最后插入“--”标记（例如：--AaB03x--、--THIS_STRING_SEPARATES--）作为结束。
* 多部分对象集合的每个部分类型中，都可以含有首部字段。另外，可以在某个部分中嵌套使用多部分对象集合
## 获取部分内容的范围请求
* 以前，用户不能使用现在这种高速的带宽访问互联网，当时，下载一个尺寸稍大的图片或文件就已经很吃力了。如果下载过程中遇到网络中断的情况，那就必须重头开始。为了解决上述问题，需要一种可恢复的机制。所谓恢复是指能从之前下载中断处恢复下载。
* 要实现该功能需要指定下载的实体范围。像这样，指定范围发送的请求叫做范围请求（Range Request）。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E8%8E%B7%E5%8F%96%E9%83%A8%E5%88%86%E5%86%85%E5%AE%B9%E7%9A%84%E8%8C%83%E5%9B%B4%E8%AF%B7%E6%B1%82.png)

# 内容协商返回最合适的内容

* 当浏览器的默认语言为英语或中文，访问相同 URI 的 Web 页面时，则会显示对应的英语版或中文版的 Web 页面。这样的机制称为内容协商（Content Negotiation）。
* 内容协商机制是指客户端和服务器端就响应的资源内容进行交涉，然后提供给客户端最为适合的资源。内容协商会以响应资源的语言、字符集、编码方式等作为判断的基准。
* 包含在请求报文中的某些首部字段（如下）就是判断的基准：
1. Accept
2. Accept-Charset
3. Accept-Encoding
4. Accept-Language
5. Content-Language
* 内容协商技术有以下3中类型
1. 服务器驱动协商（Server-driven Negotiation）
* 由服务器端进行内容协商。以请求的首部字段为参考，在服务器端自动处理。但对用户来说，以浏览器发送的信息作为判定的依据，并不一定能筛选出最优内容。
2. 客户端驱动协商（Agent-driven Negotiation）
* 由客户端进行内容协商的方式。用户从浏览器显示的可选项列表中手动选择。还可以利用 JavaScript 脚本在 Web 页面上自动进行上述选择。比如按 OS 的类型或浏览器类型，自行切换成 PC 版页面或手机版页面。
3. 透明协商（Transparent Negotiation）
* 是服务器驱动和客户端驱动的结合体，是由服务器端和客户端各自进行内容协商的一种方法。