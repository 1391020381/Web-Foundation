* [SSL/TLS协议运行机制的概述](http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)
* [图解SSL/TLS协议](http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html)


# 基本的运行过程
* SSL/TLS协议的基本思路是采用公钥加密,也就是说,客户端先向服务端所要公钥,然后用公钥加密信息,服务器收到密文后,用自己的私钥解密。
* 为保证 公钥不被篡改, 将公钥放在数字证书中,只要证书是可信的,公钥就是可信的。
* 每一次对话(sesion),客户端和服务器端都生成一个对话密钥(session key),用它来加密信息。
##  SSL/TLS协议的基本过程是这样的:
1. 客户端向服务端所有并验证公钥。
2. 双方协商生成"对话密钥"
3. 双方采用"对话密钥"进行加密通信。

## SSL协议的握手过程
* 开始加密通信之前,客户端和服务器端首先建立连接和交换参数,这个过程叫做握手(handshake)。
1. client 给出协议版本号、一个客户端生成的随机数(client random) 以及客户端支持的加密方法。
2. server 确认双方使用的加密方法,并给出数字证书、以及一个服务器生成的随机数(server random)
3. client确认数字证书有效,然后生成一个新的随机数(premaster secret),并使用数字证书中的公钥,加密这个
随机数,发给server。
4.server使用自己的私钥,获取 client发来的随机数(即 premaster secret)
5. client server根据 约定的加密方法,使用 前面的三个随机数,生成"对话密钥"(session key),用来加密接下来的整个对话过程。