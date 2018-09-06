* [干掉状态：从session到token](https://mp.weixin.qq.com/s?__biz=MzAxOTc0NzExNg==&mid=2665513566&idx=1&sn=a2688cadbe9c8042ff1abbdf04a8bd5e&chksm=80d67a1db7a1f30b28b93ed2ab29edfbf982b780433e4bfd178e3cc52cb1f9100cc8f923db4f&scene=21#wechat_redirect)

#  管理会话
* 记住哪些人登录系统,哪些人往自己的购物车中放入了商品,也就是说我必须把每个人区分开。


1. 服务器 使用 HMAC-SHA356算法把用户信息<例如 ueserID>加密 生成 签名, 签名和数据一起作为token,通过http的header来发送给用户的浏览器
2. 当用户再次访问服务器的时候,把token发送过来的时候，再以同样的 算法对 用户信息加密 并和 浏览器带过来的 前面比较，相同则认为登录，否则没有登录。