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

# Promise.prototype.then()
* then方法的第一个参数是 resolved状态的回调函数,第二个参数(可选)是rejected状态的回调函数
* then方法返回的是一个新的Promise实例(注意,不是原来的那个Promise实例)。因此可以采用链式调用。
* 采用链式的then，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用。
# Promise.prototype.catch() 
* Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。

```
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```

* Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。

```
getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});

```
* 上面代码中，一共有三个 Promise 对象：一个由getJSON产生，两个由then产生。它们之中任何一个抛出的错误，都会被最后一个catch捕获。
* `一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。`
* 跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。