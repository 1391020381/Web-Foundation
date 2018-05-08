# 防抖
* 防抖的原理就是：你尽管触发事件,但是我一定在事件触发n秒后才执行,如果你在一个事件触发的n秒内有触发了这个事件,那我就以新的事件的时间为准,n秒后才执行。
总之,就是要等到你触发完事件n秒内不再触发事件,我才执行。
1.
```
function debounce(func,wait){
  var timeout;
  return function(){
    clearTimeout(timeout)
     timeout = setTimeout(func,wait)
  }
  }
  container.onmousemove = debounce(getUserAction,1000)
```
* 要注意 首先是为 cotainer绑定了一个事件debounce,debounce返回了一个函数,并且引用了debounce的timeout参数，形成了一个闭包。而debounce返回的函数，都是先清空原来的 setTimeout,再触发下一个setTimeout
## this
2.
```
 function debounce(func,wait){
    var timeout;
    return function(){
      var context = this
      clearTimeout(timeout)
      timeout = setTimeout(function(){
        func.apply(context)
       }),wait)
    }
```
## event对象
```
function debounce(func,wait){
   var timeout;
   return function(){
     var context = this
     var args = arguments
     clearTimeout(timeout)
     timeout = setTimeout(function(){
      func.apply(content,args)
     },wait)
   }
  }
```