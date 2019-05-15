* 感性认知：一个 javascript引擎会常驻于内存中,它等待着我们(宿主) 把JavaScript代码或者函数传递给它执行。

* 由于我们主要讲javascript语言,那么采纳JSC引擎的术语,```我们把宿主发起的任务称为 宏观任务,把JavaScript引擎发起的任务称为微观任务。```

## 宏观和微观任务
* JavaScript引擎等待宿主环境分配宏观任务,在操作系统中,通常等待的行为都是一个事件循环,所以在Node术语中,也会把这个部分称为事件循环。

* ``` 在宏观任务中,JavaScript的Promise还会产生异步代码,JavaScript必须保证这些异步代码,在一个宏观任务中完成,因此,每个宏观任务中又包含了一个微观任务队列。```
* 有了宏观任务和微观任务机制,我们就可以实现JS引擎级和宿主级的任务了。
* 例如：Promise永远在队列尾部添加微观任务。
* setTimeout等宿主API,则会添加宏观任务。

## Promise

```

    setTimeout(()=>console.log("d"), 0)
    var r = new Promise(function(resolve, reject){
        resolve()
    });
    r.then(() => { 
        var begin = Date.now();
        while(Date.now() - begin < 1000);
        console.log("c1") 
        new Promise(function(resolve, reject){
            resolve()
        }).then(() => console.log("c2"))
    });


```

* 通过一系列的实验,我们可以总结一下如何分析异步执行的顺序：

1. 首先我们分析有多少个宏任务
2. 在每个宏任务中,分析有多少个微观任务
3. 根据调用次序,确定宏任务中微任务执行次序
4. 根据宏任务的触发规则和调用次序,确定宏任务的执行次序
5. 确定整个顺序

```

function sleep(duration) {
   return new Promise(function(resolve,reject) {
     console.log("b")
     setTimeout(resolve,duration)
   })
}

console.log("a")
sleep(5000).then(()=>console.log("c"))

```

## 新特性： async / await 
* async 函数必定返回Promise， 我们把所有返回Promise的函数都可以认为是异步函数。
* async 函数是一种特殊语法,特征是在 function 关键字之前加上 async关键字,这样,就定义了一个 async函数,我们可以在其中使用await来等待一个Promise.

* async 函数强大之处在于,它是可以嵌套的。我们在定义了一批原子操作的情况下,可以利用async函数组合出新的 async函数

```

function sleep(duration) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve,duration);
    })
}
async function foo(name){
    await sleep(2000)
    console.log(name)
}
async function foo2(){
    await foo("a");
    await foo("b");
}


```
