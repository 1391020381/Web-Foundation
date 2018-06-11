## 事件模型
## 回调模式
## Promise派生

* 本质上,一个promise是某个函数返回的对象,你可以把回调函数绑定在这个对象上,而不是把回调函数当作参数传进函数。
# [原理剖析](https://segmentfault.com/a/1190000009478377#articleHeader5)

## 极简promise雏形
```
function Promise(fn){
    var value = null
    var callbacks = []    // callbacks为数组,因为可能同时有多个回调函数
    this.then = function(onFulfilled){
        callbacks.push(onFulfiled)
    }
    function resolve(value){
        callbacks.forEach(function(callback){
            callback(value)
        })
    }
    fn(resolve)
}

function getUserId(){
    return new Promise(function(resolve,reject){
        http.get(url,function(results){
            resolve(result.id)
        })
    })
}

getUserId().then(function(id){  })
```
1.  Promise是一个构造函数   
    * callbacks [] 数组保存回调函数
    * resolve 函数 遍历callbacks 执行回调函数
    * 把resolve 传入到  Promise的形参函数中
2. new Promise(function(resolve,reject)) 会传入一个形参函数，函数有有两个回调函数, 执行完Promise时,会把 resolve、reject传入到  Promise的形参函数中
3. 调用 Promise的then方法 ,此时会把then的回调函数 push到 callback数组中
4. 在 Promise的形参中，的异步函数中会 调用 在执行 传入的resolve,来回调, 使用then方法注册的方法。