1. 什么是单线程,和异步有什么关系
* 单线程-只有一个线程,只能做一件事
* 原因-避免DOM渲染的冲突。
* 浏览器需要渲染DOM
* JS可以修改DOM结构
* JS执行的时候,浏览器DOM渲染会暂停
* 两端JS也不能同时执行(都修改DOM就冲突了)
* webworker支持多线程,但是不能访问DOM
* 解决方案-异步
2. 什么是event-loop
* 事件轮询,JS实现异步的具体解决方案

* 同步代码,直接执行
* 异步函数先放在 异步队列中
* 待同步函数执行完毕,轮询执行 异步队列 的函数
3. 是否用过jQuery 的Deferred
* 对修改封闭，对扩展开放 
4. Promise的基本使用和原理
* 基本语法回顾
* 异常捕获 catch (逻辑或 reject)
* 多个串联
```
var src1 = 'http://www.imooc.com/static/img/index/logo_new.png'
var result1 = loadImg(src1)
var src2 = 'https://avatars3.githubusercontent.com/u/9583120'

result1.then(funciton(img){
    console.log('第一张图片加载完成)
    return result2
}).then(function (img){
    console.log('第二张图片加载完成')
}).catch(function (ex){
    // 最后统一 catch
   console.log(ex)
})
```
* Promise.all和Promise.race
* Promise标准
* 任何技术推广使用都需要一套标准来支撑
* 如html js css http等,无规矩不成方圆
* 任何不符合标准的东西,终将会被用户抛弃。
* 不要挑战标准,不要自造标准。
* 状态变化: pending fulfilled rejected 状态不可逆
* then 必须接受两个函数回调  必须返回Promise实例<如果没有明确返回一个Promise,即返回本身,明确返回一个Promise则接下来就是执行这个Promsie >
* catch
5. 介绍一下 async/await(和Promise的区别、联系)
* 使用 await 函数必须用async 标识
* await必须返回 Promise
6. 总结一下当前JS解决异步的方案

