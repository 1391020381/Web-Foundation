* 根据是否需要向服务器重新发起HTTP请求将缓存过程分为两个部分,分别是强制缓存和协商缓存
# 强制缓存
* 控制强制缓存的字段分别是Expires和Cache-Control，其中Cache-Control优先级比Expires高
# Cache-Control
* public: 所有内容都将被缓存(客户端和代理服务器都可以缓存)
* private: 所有内容只有客户端可以缓存,Cache-Control的默认值
* no-cache：客户端缓存内容,但是是否使用缓存需要经过协商缓存来验证决定。
* no-store：所有内容都不会被缓存,即不使用强制缓存,也不使用协商缓存。
* max-age = xxx (xxx in numeric): 缓存内容将在xxx秒后失效。

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/HTTP%E3%80%81TCP%E3%80%81IP/img/%E5%BC%BA%E5%88%B6%E7%BC%93%E5%AD%98.png)
# 浏览器的缓存存放在哪里，如何在浏览器中判断强制缓存是否生效？
* from memory cache代表使用内存中的缓存, from disk cache则代表使用硬件缓存,浏览器读取缓存的顺序为memory -> disk
* 访问https://heyingye.github.io/ –> 200 –> 关闭博客的标签页 –> 重新打开https://heyingye.github.io/ –> 200(from disk cache) –> 刷新 –> 200(from memory cache)
* 内存缓存(from memory cache):内存缓存具有两个特点,分别是快速读取和时效性
    * 快速读取：内存缓存会将编译解析后的文件,直接存入该进程的内存中,占据该进程一定的内存资源,以便下次运行使用时快速读取。
    * 时效性:一旦该进程关闭，则该进程的内存则会清空。
    * 硬盘缓存(from disk cache)：硬盘缓存则是直接将缓存写入硬盘文件中，读取缓存需要对该缓存存放的硬盘文件进行I/O操作，然后重新解析该缓存内容，读取复杂，速度比内存缓存慢。
    * 在浏览器中，浏览器会在js和图片等文件解析执行后直接存入内存缓存中,那么当刷新页面时只需直接从内存缓存中读取(from memory cache);而css文件则会存入硬盘文件中，所以每次渲染页面都需要从硬盘读取缓存(from disk cache)

  # 协商缓存
* 协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求,由服务器根据缓存标识决定是否使用缓存的过程。
* 控制协商缓存的字段分别有: Last-Modified / If -Modified-Since 和Etag  / If -None-Match ，其中 Etag /If -None-Match的优先级比 Last-Modified / If-Modified-Since高
# 选择合适的缓存策略
* 对于大部分的场景都可以使用强缓存配合协商缓存解决,但是在一些特殊的地方需要选择特殊的缓存策略。
1.  对于某些不需要缓存的资源,可以使用Cache-control:no-store ,表示该资源不需要缓存
2. 对于频繁变动的资源,可以使用Cache-Control:no-cache并配合ETag使用,表示该资源已被缓存,但是每次都会发送请求询问资源是否更新。
3. 对于代码文件来说,通常使用Cache-Control:max-age = 31536000并配合协商缓存使用,然后对文件进行指纹处理,一旦文件名变动就会立即下载新的文件。
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E4%BA%92%E8%81%94%E7%BD%91%E5%8D%8F%E8%AE%AE%E5%85%A5%E9%97%A8/HTTP%E3%80%81TCP%E3%80%81IP/img/Last-Modified%20%20If-Modified-Since.png)



![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E4%BA%92%E8%81%94%E7%BD%91%E5%8D%8F%E8%AE%AE%E5%85%A5%E9%97%A8/HTTP%E3%80%81TCP%E3%80%81IP/img/Etag%20%20If-None-Match.png)


![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E4%BA%92%E8%81%94%E7%BD%91%E5%8D%8F%E8%AE%AE%E5%85%A5%E9%97%A8/HTTP%E3%80%81TCP%E3%80%81IP/img/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98-%E6%80%BB%E7%BB%93.png)