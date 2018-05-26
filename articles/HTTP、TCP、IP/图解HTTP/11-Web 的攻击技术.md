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