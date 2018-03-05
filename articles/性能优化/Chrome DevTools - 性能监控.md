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