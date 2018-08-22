# AJAX请求真的不安全么
* AJAX请求是否安全,由服务器(后台)决定
* 有这样一个说法：如果某个Web应用具备良好的安全性，那么再怎么用“不安全的AJAX”也削弱不了它的安全性，反之如果应用本身存在漏洞，不管用何种技术请求，它都是不安全的

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/ajax_safe_ornot.png)
*  因为在Web应用中,客户端输入不可信基本原则
# 常见的几种Web前端安全问题
1. xss(跨站脚本攻击)  cross-site-scripting
    * 伪造会话(基于xss实现csrf)
    * 劫持cookie
    * 恶意代码执行
2. csrf(跨站请求伪造)(cross-site request forgery)
    * 伪造用户身份操作
3. SQL注入

# CSRF简介
    * csrf_attack_1.png

 * 一般在(4)处恶意网站(B)的攻击手段如下()   