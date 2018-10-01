* [机房夜话](https://mp.weixin.qq.com/s?__biz=MzAxOTc0NzExNg==&mid=2665513725&idx=1&sn=bdad37137c3660953511410c289edc86&chksm=80d67abeb7a1f3a8cd8c62cfb3914aa9e1a425ce4986ec812c2e77c4ef8a10aab006032735b9&scene=21#wechat_redirect)

* cookie是不能跨域的, a.com产生的cookie，浏览器是不会发到b.com出的
#  json web token
* [JSON Web Token 入门教程](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)
* json web token(缩写)是目前最流行的跨域认证解决方案
1. 跨域认证的问题
* session_id
* 需要共享session数据
2. JWT的原理
* jwt的原理是，服务器认证后,生成一个JSON对象,发回给用户。以后，用户与服务端通信的时候,都要发回这个json对象。服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器在生成这个对象的时候，会加上签名。
服务器就不用保存任何session数据了,也就是说,服务器变成了无状态了,从而比较容易实现扩展。
3. jwt的数据结构

# 认证中心
1. 建立一个session
2. 创建一个ticket(可以是随机字符串)
3. 然后再重定向到你那里,url中带着ticket：www.a.com/pageA?ticket=T123  与此同时cookie也会发给浏览器,比如: Set cookie： ssoid=1234,sso.com

* 其实本质上就是一个认证中心的cookie，加上对个子系统的cookie而已。每个子系统的登录都是通过认证中心,再通过子系统返回资源并设置自己的cookie，当访问子系统下的其他页面
就不用再访问认证中心了。新系统都要到认证中心注册，以方便退出。