# Proxy
* Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
* var p = new Proxy(obj,handler)
```
var proxy = new Proxy({},{
  get:function(target,property){
    console.log(target,property）
    }
   })

```
## Proxy 支持的拦截操作一览，一共 13 种。
1. get
2. set

# Reflect
* Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。