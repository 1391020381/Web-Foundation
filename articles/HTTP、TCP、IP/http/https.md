* [一个故事讲完https](https://mp.weixin.qq.com/s/StqqafHePlBkWAPQZg3NrA)
* 对称加密算法 ,加密和解密用的是同一个密钥
* 非对称加密 RSA  保密的 私钥  公开的 公钥   用私钥加密的数据，只有对应的公钥才能加密,用公钥加密的数据,只有对应的私钥才能解密。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/https%E7%A7%81%E9%92%A5%E5%85%AC%E9%92%A5.png)

* 这些CA本身也有证书来证明自己的身份,并且CA的信用是像树一样分级的,高层的CA给底层的CA做信用背书,而操作系统/浏览器中会内置一些顶层的CA的证书,相当于你自动信任了他们。这些
顶层CA证书一定得安全地放入操作系统/浏览器中,否则世界大乱。
