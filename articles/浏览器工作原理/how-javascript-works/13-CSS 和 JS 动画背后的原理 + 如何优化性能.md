* [CSS 和 JS 动画背后的原理 + 如何优化性能](https://github.com/xitu/gold-miner/blob/master/TODO1/how-javascript-works-under-the-hood-of-css-and-js-animations-how-to-optimize-their-performance.md)
# CSS动画
# JS动画
* 默认情况下,Web动画仅修改元素的显示。如果你想让你的对象留在被移动到的位置,那么当动画完成时你应该修改它的地层样式。这就是为什么我们要监听finish 事件,并将box.style.transform属性设置为 translate(150px,200px)
# 选择JavaScript还是CSS
   * 基于CSS的动画和原生支持的Web动画通常在称为[合成器线程]的线程上处理。它与浏览器的[主线程]不同,在该主线程中执行样式、布局、绘制和JavaScript。
这意味着如果浏览器在主线程上运行一些耗时的任务,这些动画可以继续运行而不会中断。
   * 在许多情况下,transform和opacity都可以在合成器线程中处理
   * 如果任何动画触发了绘制、布局、或者两者,那么[主线程]会来完成该工作。。这个对基于 CSS 还是 JavaScript 实现的动画都一样，布局或者绘制的开销巨大，让与之关联的 CSS 或 JavaScript 执行工作、渲染都变得毫无意义。
