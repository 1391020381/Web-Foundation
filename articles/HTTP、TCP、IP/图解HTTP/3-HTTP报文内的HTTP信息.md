# HTTP 报文内的 HTTP信息
## HTTP报文
* 用于HTTP协议交互的信息被称为HTTP报文。请求端(客户端)的HTTP报文叫请求报文,响应端(服务端)的叫响应报文。HTTP报文本身是
由多行(用CR+LF作换行符)数据构成的字符串文本。
* HTTP报文大致可分为报文首部和报文主体两块。两者由最初出现的空行(CR+LF)来划分。通常，不一定要报文主体。
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/HTTP%E6%8A%A5%E6%96%87%E7%BB%93%E6%9E%84.png)
## 请求报文及响应报文的结构
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E8%AF%B7%E6%B1%82%E6%8A%A5%E6%96%87%E5%8F%8A%E5%93%8D%E5%BA%94%E6%8A%A5%E6%96%87%E7%9A%84%E7%BB%93%E6%9E%84.png)

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP、TCP、IP/img/请求报文（上）和响应报文（下）的实例.png)

## 编码提升传输速率
* HTTP 在传输数据时可以按照数据原貌直接传输，但也可以在传输过程中通过编码提升传输速率。通过在传输时编码，能有效地处理大量的访问请求。但是，编码的操作需要计算机来完成，因此会消耗更多的 CPU 等资源。
### 报文(message)
* 是 HTTP 通信中的基本单位，由 8 位组字节流（octet sequence，其中 octet 为 8 个比特）组成，通过 HTTP 通信传输。
### 实体(entity)
* 作为请求或响应的有效载荷数据(补充项)被传输,其内容由实体首部和实体主体组成。
* 通常,报文主体等于实体主体。只有当传输进行编码操作时,实体主体的内容发生变化,才导致它和报文主体产生差异。
### 压缩传输的内容编码
* HTTP 协议中有一种被称为内容编码的功能也能进行类似的操作。
* 内容编码指明应用在实体内容上的编码格式，并保持实体信息原样压缩。内容编码后的实体由客户端接收并负责解码。
#### 常用的内容编码有以下几种
1. gzip(GNU zip)
2. compress (UNI系统的标准压缩)
3. deflate (zlib)
4. identity (不进行编码)
### 分割发送的分块传输编码
* 在 HTTP 通信过程中，请求的编码实体资源尚未全部传输完成之前，浏览器无法显示请求页面。在传输大容量数据时，通过把数据分割成多块，能够让浏览器逐步显示页面。
* 这种把实体主体分块的功能称为分块传输编码（Chunked Transfer
  Coding）。
* HTTP/1.1 中存在一种称为传输编码（Transfer Coding）的机制，它可以在通信时按某种编码方式传输，但只定义作用于分块传输编码中。
### 发送多个数据的多部分对象集合
* 发送邮件时，我们可以在邮件里写入文字并添加多份附件。这是因为采用了 MIME（Multipurpose Internet Mail Extensions，多用途因特网邮件扩展）机制，它允许邮件处理文本、图片、视频等多个不同类型的数据。例如，图片等二进制数据以 ASCII 码字符串编码的方式指明，就是利用 MIME 来描述标记数据类型。而在 MIME 扩展中会使用一种称为多部分对象集合（Multipart）的方法，来容纳多份不同类型的数据。
* 相应地，HTTP 协议中也采纳了多部分对象集合，发送的一份报文主体内可含有多类型实体。通常是在图片或文本文件等上传时使用。
* 多部分对象集合包含的对象如下：
1. multipart/form-data   在Web表单文件上传时使用
2. multipart/byteranges   状态码 206（Partial Content，部分内容）响应报文包含了多个范围的内容时使用。
