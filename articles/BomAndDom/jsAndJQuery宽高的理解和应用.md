# window和document的区别
- Window对象表示浏览器中打开的窗口
- Window对象可以省略  alert();window.alert()
- Document对象是Window对象的一部分
- 浏览器的html文档称为document对象

# window.location和document.location
- window对象的location属性引用的是Location对象,表示该窗口中当前显示文档的URL
- document的对象的location属性也是引用了location对象
- window.loaction === document.loacation 

# 与Window相关的宽高 // 打印测量
- window.innerWidth
- window.innerheight
- window.outerWidth
- window.outerHeight

## window.screen对象包含有关用户屏幕的信息。
- window.screen.height
- window.screen.width
- window.screen.availHeight
- window.screen.availWidth
- window.screenTop  // 浏览器距屏幕的上面的高度
- window.screenLeft

# window相关宽高浏览器兼容问题   


# document 相关的宽高

## 与client相关的宽高
- clientWidth和clientHeight,该属性指的是元素的可视部分的宽度和高度,即padding+content - 滚动条的宽高

小结clientWidth和clientHeight
clientWidth = style.width + style.padding*2-滚动轴的宽度

## clientLeft和clientTop
这两个返回的是元素周围边框的厚度,如果不指定一个边框或者不定位该元素,它的值就是0;

小结clientLeft和clientTop

这一对属性就是用来读出元素的border的宽高和高度的    clientTop = border-top的border-width

## 与offset相关的
 offsetWidth与offsetHeight 这一对属性指的是元素的border + padding + contentd的宽高。该属性和其内部的内容是否超出元素大小无关,只和本来设定的border以及width和height有关
 
 小结offsetWidth和offsetHeight
 
 offsetWidth = style.width + style.padding + border宽度*2 + 滚动条的宽度

#  offetLeft和offsetTop
  ## offsetParent
-   如果当前元素的父级元素没有进行css定位(postition为absoluter或者relative),offsetParent为body
-   如果有offsetParent取最近的那个父级。

==注意是相对父元素,即当前元素在offsetParent的content中==
在IE8/9/10/chrome中

offsetLeft = (offsetParent的margin-left) + (offsetParent的border宽度) + (offsetParent的padding-left) + (当前元素的margin-left)

在FireFox中

offsetLeft = (offsetParent的margin-left) + (offsetParent的padding-left) + (当前元素的margin-left)


## scroll相关的

### document.body的scrollWidth和scrolHeight
- 给定宽高小于浏览器窗口
   scrollWidth通常是浏览器窗口的宽度  scrollHeight通常是浏览器窗口的高度
- 给定宽高大于浏览器窗口,且内容小于给定宽高
    scrollWidth = 给定的宽度 + 其所有的padding + margin + border
    scrollHeight = 给定的高度 + 其所有的padding + margin + border
- 给定宽高大于浏览器窗口,且内容大于给定宽高
    scrollWidth = 内容宽度 +其所有的padding + margin+ border
    scrollHeight = 内容高度 +其所有的padding + margin+ border

# 某个div下的scrollWidth和scrollHeight

无滚动轴时：

scrollWidth = clientWidth = style.width + style.padding *2

有滚动轴的情况时:

scrollWidth = 实际内容的宽度 + padding *2
scrollHeight = 实际内容的高度 + padding *2


# scrollLeft 和scrollTop
这对属性是可读写的,指的是当前元素其中的内容超出器宽高的时候,元素被卷起的高度和宽度



# obj.style.width和obj.style.height
对于一个dom元素,它的style属性返回的是一个对象,这个对象的任意一个属性是可读写的,style.width等于css属性中的宽高,style.height等于css属性中的高度。


# docuemnt document.documentElement(html) document.body

# 兼容问题

## client相关的宽高,各个浏览器解析都一样当我们要获取可视区域的宽高时

document.documentElement.clientWidth || document.body.clientWidth

## offset相关
 offsetTop和offsetLeft
 
 offstWidth和offsetHeight各个浏览器解析基本一致
 
 
 # scroll相关宽高
document.body规则值针对chrome 在火狐中把body当作div处理

在某个div下前面的规则同样适用


# Event对象的5种坐标
1. clientX和clientY (相对与浏览器<可视区左上角0,0>的坐标)
2. screenX和screenY(相对设备屏幕左上角(0,0)的坐标)
3. offsetX和offsetY(相对事件源左上角(0,0))的坐标
4. pageX和pageY (相对与整个网页左上角(0,0))的坐标
5. x和y  本来是ie的属性,相对与用css动态定位的最内层包含元素


# js可视区域加载

getBoundingClientRect()
```
<body>
<div id= "showDiv"></div>
</body>
function showDivs(){
   var showId = docuemnt.getElementById('showDiv');
   var clients = window.innerHeight || document.document.clientHeight ||docuemnt.body.clientHeight
   var divTOp = showId.getBoundingClientRect().top
   if(divTop<=clients){
       // 把图片的src 放置到自定义的属性上,然后自己在操作
       showId.classList.add('fadeInLeft')
   }
}
```

# 网页滚动到底部或顶部 

scrollTop 为 0 即到顶部   scrollTop + clientHeight = 网页的高度 即到底部 

```
<body>
<div id= "showDiv"></div>
</body>
function showDivs(){
   var showId = docuemnt.getElementById('showDiv');
   var clients = window.innerHeight || document.document.clientHeight ||docuemnt.body.clientHeight
   var scrollTOp = document.body.scrollTop
   var wholeHeight = document.body.scrollHeigh   // body的scroll的计算
   
   if(clients+scrollTop >=wholeHeight){
       alert('底部')
   }
   if(scrollTop === 0) {
       alert('顶部')
   }
}
```

# div滚动到底部
style.width只是取到内联(写在元素上的样式,且不能获取到padding)


```
var divScroll = document.getElementById('testDiv')
funtion divScroll(){
    var wholeHeight = divScrollHeight
    var scrollTop = divScrollTop
    var divHeight = divScroll.clientHeigh
    if(scrollTop + divHeight>= wholeHeight){
        alert('底部')
    }
    if(scrollTop == 0){
        alert('顶部')
    }
}
```
# 计算滚动轴的宽度


```
function getScrollBar(){
    var el = document.createElement('p')
    var styles = {
    width:'100px'
     height:'100px',
     overflowY:'scroll'
    }
    var i
    var scrollBarWidth
    for(i in styles){
        el.style[i] = styles[i]
    }
    document.body.appendChild(el)
    var scrollBarWidth = el.offsetWidth - el.clientWidth
    el.remove()
    return scrollBarWidth
}


// 方法二

function getScrollBar(){
    var el = document.createElement('p')
    var styles = {
    width:'100px'
     height:'100px',
    clientWidth1,
    clientWidth2
    var i
    var scrollBarWidth
    for(i in styles){
        el.style[i] = styles[i]
    }
    document.body.appendChild(el)
    clientWidth1 = el.clientWidth
    el.style.overflowY  = 'scroll'
    clientWidth2= el.clientWidth
    var scrollBarWidth =clientWidth1 - clientWidth2
    el.remove()
    return scrollBarWidth
}


```

# Style cssText属性
cssText属性设置或返回作为字符串的样式声明的内容

Object.style.cssText = 'string'

# 例如
ripple.style.cssText = 'width: ' + wx + 'px;height: ' +
			wx + 'px;top: ' + y + 'px;left: ' + x + 'px';


			```
			function scrollTop(el, from = 0, to, duration = 1000) {
            	if (!window.requestAnimationFrame) {
            		window.requestAnimationFrame = (
            			window.webkitRequestAnimationFrame ||
            			window.mozRequestAnimationFrame ||
            			window.msRequestAnimationFrame ||
            			function (callback) {
            				return window.setTimeout(callback, 1000 / 60);
            			}
            		);
            	}
            	const difference = Math.abs(from - to);
            	const step = Math.ceil(difference / duration * 50);

            	function scroll(start, end, step) {
            		if (start === end) return;

            		let d = (start + step > end) ? end : start + step;
            		if (start > end) {
            			d = (start - step < end) ? end : start - step;
            		}

            		if (el === window) {
            			window.scrollTo(d, d);
            		} else {
            			el.scrollTop = d;
            		}
            		window.requestAnimationFrame(() => scroll(d, end, step));
            	}

            	scroll(from, to, step);
            }

			```