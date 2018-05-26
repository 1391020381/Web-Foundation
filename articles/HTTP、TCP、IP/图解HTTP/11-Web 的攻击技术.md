# 针对 Web 的攻击技术
* 简单的HTTP协议本身并不存在安全性问题,因此协议本身几乎不会成为攻击的对象。应用HTTP协议的服务器和客户端,以及运行在服务器上的Web应用等资源才是攻击目标。
##  HTTP 不具备必要的安全功能
* 几乎现今所有的Web网站都会使用会话(session)管理、加密处理等安全性方面的功能,而HTTP协议内并不具备这些功能。
## 在客户端即可篡改请求
* 在Web应用中,从浏览器那接受到的HTTP请求的全部内容,都可以在客户端自由地变更、篡改。所以Web应用可能会接受到与预期数据不相同的内容。
* 在HTTP请求报文内加载攻击代码,就能发起对Web应用的攻击。通过URL查询字段或表单、HTTP首部、Cookie等途径把攻击代码传入,若这时Web应用存在安全漏洞,那内部信息就会遭到窃取,或被攻击者拿到管理权限。
 ### 对Web应用的攻击模式由以下两种。
1. 主动攻击

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E4%B8%BB%E5%8A%A8%E6%94%BB%E5%87%BB.png)


2.  被动攻击

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E8%A2%AB%E5%8A%A8%E6%94%BB%E5%87%BB.png)

* 以服务器为目标的主动攻击
    * 主动攻击(active attack)是指攻击者通过直接访问Web应用,把攻击代码传入的攻击模式。由于该模式时直接针对服务器上的资源进行攻击,因此攻击者需要能访问到这些资源。
    * 主动攻击模式里具有代表性的攻击是SQL注入攻击和OS命令注入攻击。
*   以服务器为目标的被动攻击
    * 被动攻击(passive attack)是指利用圈套策略执行攻击代码的攻击模式。在被动攻击过程中,攻击者不直接对目标Web应用访问发起攻击。
* 利用用户的身份攻击企业内部网络

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E5%88%A9%E7%94%A8%E8%A2%AB%E5%8A%A8%E6%94%BB%E5%87%BB%E5%AF%B9%E4%BC%81%E4%B8%9A%E5%86%85%E7%BD%91%E5%8F%91%E5%8A%A8%E6%94%BB%E5%87%BB.png)

# 因输出值转义不完全引发的安全问题
* 实施Web应用的安全对策可大致分为以下两部分:
    * 客户端的验证
    * Web应用端(服务器端)的验证
        * 输入值验证
        * 输出值的转入
  * 多数情况下采用JavaScript在客户端验证数据。可是在客户端允许篡
改数据或关闭 JavaScript，不适合将JavaScript验证作为安全的防范对策。保留客户端验证只是为了尽早地辨识输入错误,起到提高UI体验的作用。
   ## 跨站脚本攻击
* 跨站脚本攻击(Cross-Site Scripting, XSS) 是指通过存在安全漏洞的Web网站注册用户的   浏览器内运行非法的HTML标签或JavaScript进行的一种攻击。动态创建的HTML部分有可能隐藏着安全漏洞。就这样,攻击者编写脚本设下陷阱,用户在自己的浏览器上运行时,一不小心就会受到被动攻击。 
* 跨站脚本攻击有可能造成以下影响
    * 利用虚假输入表单骗取用户个人信息。
    * 利用脚本窃取用户的 Cookie 值，被害者在不知情的情况下，
    * 帮助攻击者发送恶意请求。
    * 显示伪造的文章或图片。     
* XSS 是攻击者利用预先设置的陷阱触发的被动攻击
* 跨站脚本攻击属于被动攻击模式，因此攻击者会事先布置好用于
攻击的陷阱。     

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E8%B7%A8%E7%AB%99%E8%84%9A%E6%9C%AC%E6%94%BB%E5%87%BB%E6%A1%88%E4%BE%8B.png)

## SQL 注入攻击
* 非法查看或篡改数据库内的数据
* 规避认证
* 执行和数据库服务器业务关联的程序等

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/SQL%20%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB%E7%9A%84%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B.png)

## OS命令注入的攻击
* OS命令注入攻击(OS Command Injection)是指通过Web应用,执行非法的操作系统命令达到攻击的目的。只要在能调用Shell函数的地方就有被攻击的风险。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/OS%20%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB%E7%9A%84%E6%94%BB%E5%87%BB%E6%A1%88%E4%BE%8B.png)

## HTTP 首部注入攻击
* HTTP首部注入攻击(HTTP Header Injection) 是指攻击者通过在响应首部字段内插入换行,添加任意响应首部或主体内容的一种攻击。属于被动攻击。
* HTTP首部注入攻击有可能会造成的以下一些影响：
     * 设置任何 Cookie 信息
     * 重定向至任意 URL
      * 显示任意的主体（HTTP 响应截断攻击）

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/HTTP%20%E9%A6%96%E9%83%A8%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB%E7%A4%BA%E4%BE%8B.png)

### HTTP 响应截断攻击
* HTTP 响应截断攻击是用在HTTP首部注入的一种攻击。攻击顺序相同,但是要将两个%0D%0A%0D%0A并排插入字符串后发送。利用这两个连续的换行就可作出HTTP首部与主体分隔所需的空行了,这样就能显示伪造的主体,达到攻击的目的。这样的攻击叫做HTTP响应截断攻击。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/HTTP%20%E5%93%8D%E5%BA%94%E6%88%AA%E6%96%AD%E6%94%BB%E5%87%BB.png)


### 邮件首部注入攻击
* 邮件首部注入(Mail Header Injection) 是指Web应用的邮件发送攻能,攻击者通过向邮件首部To或Subject内任意添加非法内容发起的攻击。利用存在安全漏洞的 Web 网站，可对任意邮件地址发送广告邮件或病毒邮件。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E9%82%AE%E4%BB%B6%E9%A6%96%E9%83%A8%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB%E6%A1%88%E4%BE%8B.png)

### 目录遍历攻击
* 目录遍历(Directory Traversal) 攻击是指对本无意公开的文件目录,通过非法截断其目录路径后,达成访问目的的一种攻击。这种攻击有时也称为路径遍历(Path Traversal)攻击。
* 通过Web应用对文件处理操作时,在由外部指定文件名的处理存在疏漏的情况下,用户可使用../等相对路径定位到/etc/passed等绝对路径上，因此服务器上任意的文件或文件目录皆有可能被访问到。这样一来,就有可能非法浏览、篡改或删除Web服务器上的文件。
* 固然存在输出值转义的问题,但更应该关闭指定对任意文件名的访问权限。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E7%9B%AE%E5%BD%95%E9%81%8D%E5%8E%86%E6%94%BB%E5%87%BB%E6%A1%88%E4%BE%8B.png)

## 远程文件包含漏洞
* 远程文件包含漏洞(Remote File Inclusion)是指当部分脚本内容需要从其他文件读入时,攻击者利用指定外部服务器的URL充当依赖文件,让脚本读取
之后,就可运行任意脚本的一种攻击。
* 这主要是 PHP 存在的安全漏洞，对 PHP 的 include 或 require 来说，
这是一种可通过设定，指定外部服务器的 URL 作为文件名的功能。
但是，该功能太危险，PHP5.2.0 之后默认设定此功能无效。
* 固然存在输出转义的问题,但更应控制对任意文件名的指定。

## 因设置或设计上的缺陷引发的安全漏洞
1. 强制浏览
    * 强制浏览(Forced Browsing)安全漏洞是指,从安置在Web服务器的公开目录下的文件中,浏览那些原本非自愿公开的文件。
2. 不正确的错误消息处理
    * 不正确的错误消息处理（Error Handling Vulnerability）的安全漏洞是指，Web 应用的错误信息内包含对攻击者有用的信息。与 Web 应用有关主要错误信息如下所示。
        * Web应用抛出的错误消息
        * 数据库等系统抛出的错误消息

3. 开放重定向
    * 开放重定向（Open Redirect）是一种对指定的任意 URL 作重定向跳转的功能。而于此功能相关联的安全漏洞是指，假如指定的重定向 URL到某个具有恶意的 Web 网站，那么用户就会被诱导至那个 Web 网站。
    * http://example.com/?redirect=http://www.tricorde.jp
4. 因会话管理疏忽引发的安全漏洞
* 会话管理是用来管理用户状态额必备功能，但是如果在会话管理上有所疏忽,就会导致用户的认证状态被窃取等后果。
    * 会话劫持
        * 会话劫持（Session Hijack）是指攻击者通过某种手段拿到了用户的会话 ID，并非法使用此会话 ID 伪装成用户，达到攻击的目的。
        * 几种攻击者可获取会话ID的途径。
            * 通过非正规点的生成方法推测会话ID
            * 通过窃听或XSS攻击盗取会话ID
            * 通过会话固定攻击(Session Fixation)强行获取会话ID
