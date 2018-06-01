* 根据是否需要向服务器重新发起HTTP请求将缓存过程分为两个部分,分别是强制缓存和协商缓存
# 强制缓存
* 控制强制缓存的字段分别是Expires和Cache-Control，其中Cache-Control优先级比Expires高
# Cache-Control
* public: 所有内容都将被缓存(客户端和代理服务器都可以缓存)
* private: 所有内容只有客户端可以缓存,Cache-Control的默认值
* no-cache：客户端缓存内容,但是是否使用缓存需要经过协商缓存来验证决定。
* no-store：所有内容都不会被缓存,即不使用强制缓存,也不使用协商缓存。
* max-age = xxx (xxx in numeric): 缓存内容将在xxx秒后失效。