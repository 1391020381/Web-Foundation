 [从浏览器多进程到JS单线程,JS运行机制最全面的一次梳理](https://juejin.im/post/5a6547d0f265da3e283a1df7)
 * 内容是:从浏览器进程,再到浏览器内核运行,再到JS引擎单线程,再到JS事件循环机制。
 # 区分进程和线程
   1. 进程是CPU资源分配的最小单位(系统会给它分配内存,是能拥有资源和独立运行的最小单位)
   2. 线程是CPU调度的最小单位(线程是建立在进程的基础上的一次程序运行单位,一个进程中可以有多个线程)
    ## tips
      *  不同进程之间也可以通信,不过代价较大
      *  现在,一般通过的叫法:单线程与多线程
# 浏览器是多进程的
   1. 浏览器是多进程的
   2. 浏览器之所以能够运行,是因为系统给它的进程分配了资源(cpu、内存)。
   3. 简单点理解,每打开一个Tab页,就相当于创建了一个独立的浏览器进程。
   4. 注意:在这里浏览器应该也有自己的优化机制，有时候打开多个tab页后，可以在Chrome任务管理器中看到，有些进程被合并了 （所以每一个Tab标签对应一个进程并不一定是绝对的）   
# 浏览器都包含哪些进程
   1.  Browser进程:浏览器的主进程(负责协调、主控),只有一个作用有：
       * 负责浏览器界面显示,与用户交互。如前进,后退等
       * 负责各个页面的管理,创建和销毁其他进程
       * 将 Renderer进程得到的内存中Bitmap,绘制到用户界面上
       * 网络资源的管理,下载等。 
   2. 第三方插件进程: 每种类型的插件对应与一个进程,仅当使用时才创建
   3. GPU进程:最多一个,用于3D绘制等。
   4. 浏览器渲染进程(浏览器内核) (Renderer进程 内部是多线程的) : 默认每个Tab页面一个进程,互不影响。主要作用为： 页面渲染,脚本执行,事件处理等。
# 浏览器多进程的优势
  1. 避免单个page crash 影响整个浏览器
  2. 避免第三方插件crash影响整个浏览器
  3. 多进程充分利用多核优势
  4. 方便使用沙盒模型隔离插件等进程,提高浏览器器稳定性。
# 重点是浏览器内核(渲染进程)  
   * 页面的渲染,JS的执行,事件的循环,都在这个进程内进行。
   * 浏览器的渲染进程是多线程的
      1. GUI渲染线程
         * 负责渲染浏览器界面,解析HTML CSS,构建DOM树和RenderObject树,布局和绘制等
         * 当界面需要重新绘制(Repaint) 或者由于某种操作引发回流(reflow)时,该线程就会执行
         * 注意,GUI渲染线程与JS引擎线程是互斥的,当JS引擎执行时GUI线程会被挂起(相当于被冻结了),GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。
      2. JS引擎线程
         * 也称为 JS内核,负责处理JavaScript脚本程序。(例如V8引擎)
         * JS 引擎一直等待这任务队列中任务的到来,然后加以处理,一个Tab页(renderer进程)中无论什么时候都只有一个JS线程在运行JS程序。
         * GUI渲染线程与JS引擎线程是互斥的,所以如果JS执行的时间过长,这样就会造成页面的渲染不连贯,导致页面渲染加载阻塞。
      3. 事件触发线程
         * 归属于浏览器而不是JS引擎,用来控制事件循环(可以理解,JS引擎自己都忙不过来,需要浏览器另开线程协助。)
         * 当JS引擎执行代码如 setTimeout时(也可来自浏览器内核的其他线程,如鼠标点击、AJAX异步请求等),会将对应的任务添加到事件线程中
         * 当对应的事件符合触发条件被触发时,该线程会把事件添加到待处理队列的队尾,等待JS引擎的处理。
         * 注意,由于JS的单线程关系,所以这个待处理队列的事件都得排队等待JS引擎处理(当JS引擎空闲时才会出执行)  
      4. 定时触发器线程
         * 传说中的setInterval 与setTimeout所在线程
         * 浏览器定时计数器并不是有JavaScript引擎计数的,(因为JavaScript引擎是单线程的,如果处于阻塞线程状态就会影响计时器的准确)
         *  因此通过单线程来计时并触发定时(计时完毕后,添加到事件队列中,等待JS引擎空闲后执行)
         * 注意 W3C在HTML标准中规定,规定要求setTimeout中低于4ms的时间间隔算为4ms
      5. 异步Http请求线程
         * 在XMLHttpRequest在连接后是通过浏览器新开一个线程请求
         * 将检测到状态变更时,如果设置回调函数,异步线程就产生状态变更事件,将这个回调再放入事件队列中。再有JavaScript引起执行。
       
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/JavaScript%E7%9B%B8%E5%85%B3/img/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8.jpg)   
 
# Brower进程和浏览器内核(Renderer进程)的通信过程
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/JavaScript%E7%9B%B8%E5%85%B3/img/%E8%BF%9B%E7%A8%8B%E9%80%9A%E4%BF%A1.jpg)

# 梳理浏览器内核中线程之间的关系
  1. GUI渲染线程与JS引擎线程互斥
  2. JS阻塞页面加载
  3.  WebWorker,JS的多线程
       * JS引擎是单线程的，这一点的本质仍然未改变，Worker可以理解是浏览器给JS引擎开的外挂，专门用来解决那些大量计算问题。
  4. WebWorker 与 SharedWorker
     * SharedWorker由独立的进程管理，WebWorker只是属于render进程下的一个线程
# 简单梳理下浏览器渲染流程
   * 浏览器输入url,浏览器主进程接管,开一个下载线程
   * 然后进行 http请求(略去DNS查询,IP寻址等等操作),然后等待响应,获取内容
   * 随后将内容通过 RendererHost接口转交给Renderer进程
   * 浏览器渲染流程开始
## 浏览器你内核拿到内容后,渲染大概可以划分成一下一个步骤:
   1. 解析hmtl建立dom树
   2. 解析css构建render树(将css代码解析成树形的数据结构,然后结合DOM合并成render树)
   3. 布局render树(paint),绘制页面像素信息
   5.浏览器会将各层的信息发送给GPU,GPU会将各层合成(composite)，显示在屏幕上。
       

 