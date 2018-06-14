* [CSS动画：animation、transition、transform、translate傻傻分不清](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650587441&idx=1&sn=366281a3f2b8f09f9c75e7ea684296bf&chksm=8891d115bfe65803ac126fd468da7e47990ab4c17041d84207e2971d2c18d9c7bc0e0bb9e078&mpshare=1&scene=23&srcid=06146e3Ho4TOwEnreprwCgtG#rd)

# transition
* transition :property duration timing-function delay;
* transition-property 规定设置过渡效果的CSSS属性的名称
* transition-duration  规定完成过渡效果需要多少秒或毫秒
* transition-timing-function 规定速度效果的速度曲线
* transition-delay    定义过渡效果何时开始
* transition产生动画的条件是transition设置的property发生变化,这种动画的特点是需要"一个驱动力出触发"
* 我们平时用到的:hover 、 :focus、 :checked、 媒体查询或者 javaScript<添加 class>
# animation:name duration timing-function delay iteration-cout direction play-state fill-mode
* name 用来调用 @keyframe定义好的动画,与keyframes定义的动画名称一致
* duration 指定元素播放动画所持续的时间
* timing-function 规定速度效果的速度曲线,是针对每个小动画所在的时间范围的变换速率。
* delay 定义在浏览器开始执行动画之前等待的时间,值整个 animation执行之前等待的时间
* iteration-cout 定义动画播放次数,可选具体次数或无限(infinite)
* direction  设置动画播放方向:normal(按时间轴顺序) reverser(时间轴反方向运行)  alternate(轮流,即来回往复进)   alternate-reverse(动画先反运行再正方向运行,并持续交替运行)
* play-state 控制元素动画的播放状态,通过此来控制动画的暂停和继续, 两个值：running(继续) paused(暂停)
* fill-mode 控制动画结束后，元素的样式,有四个值:none(回到动画没开始时的状态)  forwards(动画结束后动画暂留在结束状态)  backwords(动画回到第一帧的状态) both(根据animation-direction轮流应用forwards和backwards规则)注意与iteration-count不要冲突(动画执行无限次)

# setTimeout setInterval   requestAnimationFrame


* [CSS_Animations][https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations]