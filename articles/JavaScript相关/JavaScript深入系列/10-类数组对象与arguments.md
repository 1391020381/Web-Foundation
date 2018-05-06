# 类数组对象
* 类数组对象：拥有一个Length属性和若干索引属性的对象
* 读写 、长度、遍历
* 调用数组方法  Array.prototype.join.call(arrayLike,'&')
* 类数组转数组   Array.prototype.slice.call(arrayLike)
# Arguments对象
* length属性 表示实参的长度
* callee属性  通过它可以调用函数自身 arguments.callee
* arguments和对应的参数的绑定<传入的参数,实参和arguments的值会共享,当没有传入时,实参与arguments值不会共享。在严格模式下,实参和arguments不会共享的。>
* 传递参数
```
function foo(){
    bar.apply(this,arguments)
}
function bar(a,b,c){
    console.log(a,b,c)
}
```
* 强大的ES6 
```
function func(...arguments){
    console.log(arguments)
}
```
# 应用
* 参数不定长
* 函数柯里化
* 递归调用
* 函数重载