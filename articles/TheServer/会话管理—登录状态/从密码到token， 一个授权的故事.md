* [从密码到token， 一个授权的故事](https://mp.weixin.qq.com/s?__biz=MzAxOTc0NzExNg==&mid=2665513744&idx=1&sn=93d0db97cfd67422bcd21c8afd00f495&chksm=80d67b53b7a1f24537fdc7c10eb2783357c1f8c65ad55601a722216d2293ae3fb7b1c16e5449&scene=21#wechat_redirect)

1. 我把密码给你
2. Token
* 需要在app_id 和app_secret
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/TheServer/img/app_id%E5%92%8Capp_secret.png)
3. Authorization  Code + Token
* 当你使用网易账号登录的时候,网易认证中心这一次不给我直接发token,而是发一个授权码(authorization  Code),我的信用卡管家服务端获取到这个code以后,在后台再次访问网易认证中心,这一次他才发给我真正的token。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/TheServer/img/AuthorizationCode%20%2B%20Token.png)

* 授权码和我的信用卡管家申请的app_id，app_secret关联，只有信用卡管家发出的token请求,网易认证中心才认为合法；还可以让授权码有时间限制,比如5分钟失效,还有可以让授权码只能换一次token，第二次就不行了。