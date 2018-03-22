[Chrome DevTools - 性能监控](https://juejin.im/post/5a37b2f56fb9a0451e3fe73d)
[记Chrome的性能分析工具实践](https://juejin.im/post/5a6e78abf265da3e3f4cf085)
[全新Chrome Devtool Performance使用指南](https://zhuanlan.zhihu.com/p/29879682)
1. Chrome DevTools的Performance Monitor<性能实时监控>
2. Memory功能 Take heap snapshop
3. 使用 Timeline分析 <新版本Chrome里改成Performance>
   * 主要分析Response Animation Idle三个功能指标
   * 火焰图部分,横坐标代表消耗时间,纵坐标是调用栈关系,上面的栈调用下面的栈。
   * 查看渲染部分详情可以看到右上角的一个三角形,这个三角形代表这里存在异常,并且Chrome给出了相应的警告(Forced reflow) 注意下面的  Waring,并 说明了 Call Stacks   
   * FPS(frames per second)是用来分享动画的一个主要性能指标。能保持在60 FPS的话,那么用户体验就是不错的。 
   * 小功能:显示实时FPS面板
      1. 按下 Command+Shift+P（Mac）或者 Control+Shift+P(Windows, Linux) 打开命令菜单
      2. 输入Rendering，点选Show Rendering
      3. 在Rendering面板里，激活FPS Meter。FPS实时面板就出现在页面的右上方。
      
  #  HTTP强缓存和协商缓存
   1. 强制缓存
      * Expires
      * Cache-Control 
      * 同时出现 Cache-Control:max-ag和Expires,那么max-age优先级更高
   2. 协商缓存
      * 协商缓存就是由服务器来确定缓存资源是否可用,所以客户端与服务器通过某个标识来进行通信,从而让服务器判断请求资源是否可以缓存访问
      * Etag/If-None-Match
      *  Last-Modify/If-Modify-Since
      * Last-Modified与ETag是可以一起使用的，服务器会优先验证ETag，一致的情况下，才会继续比对Last-Modified，最后才决定是否返回304。
      * 为什么要有Etag
         * 一些文件也许会周期性的更改，但是他的内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被修改了，而重新GET；
         
         * 某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说1s内修改了N次)，If-Modified-Since能检查到的粒度是s级的，这种修改无法判断(或者说UNIX记录MTIME只能精确到秒)；
         
         * 某些服务器不能精确的得到文件的最后修改时间。        