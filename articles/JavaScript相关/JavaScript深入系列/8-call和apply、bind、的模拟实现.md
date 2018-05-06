# call
* call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法。
* Function.prototype.call()
* Function.prototype.apply()
* Function.prototype.bind()
## 实现的版本
1. 
```
Function.prototype.call2 = function(context){
    context.fn = this
    context.fn()
    delete context.fn
}

```
2. 
```
function.prototype.call2 = function(context){
    context.fn = this
    var args = []
    for(var i=1;i<arguments.length;i++){
        args.push('arguments[' + i + ']')
    }
    eval('context.fn('+args + ')')
    delete context.fn
}

```
3. 
```
Function.prototype.call2 = function(cntext){
    var context = context ||window
    context.fn = this
    var args = []
    for(var i=0,len=arguments.length;i<len;i++){
        args.push('arguments['+i+']')
    }
    var result = eval('context.fn('+args+')')
    delete context.fn
    return result
}

```
# apply 
* 类似call,只是传入的参数是数组
# bind
* bind()方法会创建一个新函数。当这个新函数被调用的时候,bind()的第一个参数将作为它运行时的this,之后的一系列参数将会在传递的实参前传入它的参数。
* 返回一个函数
* 可以传入参数

