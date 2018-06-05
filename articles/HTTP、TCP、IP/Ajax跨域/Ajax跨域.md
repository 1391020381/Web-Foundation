# 题纲
* 关于跨域，有N种类型，本文只专注于ajax请求跨域(,ajax跨域只是属于浏览器”同源策略”中的一部分,其它的还有Cookie跨域iframe跨域,LocalStorage跨域等这里不做介绍)，内容大概如下:
    * 什么是跨域
        * 原理
        * 表现
    * 如何解决ajax跨域
        * JSONP方式
        * CORS方式
        * 代理请求方式
     * 如何分析ajax跨域
        * http抓包的分析
        * 一些示例       
# 什么是ajax跨域
1.  ajax跨域的原理
    * ajax出现请求跨域错误问题,主要原因就是浏览器的 同源策略
    * [浏览器同源政策及其规避方法(阮一峰)](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)     
2. CORS请求原理
    * CORS是一个W3C标准，全称是”跨域资源共享”（Cross-origin resource sharing）。它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。
    * 基本上目前所有的浏览器都实现了CORS标准,其实目前几乎所有的浏览器ajax请求都是基于CORS机制的,只不过可能平时前端开发人员并不关心而已(所以说其实现在CORS解决方案主要是考虑后台该如何实现的问题)。
    * [跨域资源共享 CORS 详解(阮一峰)](http://www.ruanyifeng.com/blog/2016/04/cors.html)
3. 如何判断是否是简单请求
    * 浏览器将CORS请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。`只要同时满足以下两大条件`，就属于简单请求。
        *  请求方法是以下三种方法之一: HEAD  GET  POST
        * HTTP的头部信息不超过以下几个字段
            * Accept
            * Accept-Language
            * Content-Language
            * Last-Event-ID
            * Content-Type(只限于三个值application/x-www.form-urlencoded   multipart/form-data  text/plain)      
