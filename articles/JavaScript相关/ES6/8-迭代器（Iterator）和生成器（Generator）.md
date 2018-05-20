# 迭代器(Iterator)
## ES实现迭代器
* 迭代器是一种特殊对象,每个迭代对象都有一个next(),该方法返回一个对象,包括value和done属性
```
 // 实现一个返回迭代器对象的函数,注意该函数不是迭代器,返回结果才叫迭代器。
 function createIterator(items){
     var i = 0;
     retrun {
         next(){
             var done = (i>=items.length)
             var value = !done?items[i++]:undefined
             return {
                 done,
                 value
             }
         }
     }
 }
```
# 生成器(Generator)
* 生成器是函数:用来返回迭代器

```
function *createIterator(){
    yield 1;
    yield 2;
    yield 3
}
```
## 在for循环中使用迭代器
```
function *createIterator(items){
    for(let i=0;i<items.length;i++>){
        yield items[i]
    }
}
```
## yield 使用限制
* yield只可以在生成器函数内部使用,如果在非生成器函数内部使用则会报错。
## 生成器函数表达式
```
const crateIterator = function *(){
    yield 1;
    yield 2
}
```
## 在对象中添加生成器函数
```
const obj = {
    a:1,
    *createIterator(){
        yield this.a
    }
}
```
## 可迭代对象和for of循环 
* 迭代器是对象,生成器是返回迭代器的函数
* 凡是通过生成器生成的迭代器,都是可以迭代的对象(可迭代对象具有Symbol.iterator属性),
也就是可以通过for of将value变量出来

```
function *createIterator(){
    yield 1;
    yield 2;
    yield 3;
}

const a = createIterator()
for(let value of a){
    console.log(value)
}
```
* Symbol.iterator 
* typeof obj[Symbol.iterator] === 'function'
## 创建可迭代对象
* 在ES6中,数组、Set、Map、字符串都是可迭代对象。
* 默认情况下定义的对象(object)时不可迭代的,但是可以Symbol.iterator创建迭代器。
```
const obj = {
    items:[],
    *[Symbol.iterator](){
        for(let item of this items){
            yield item;
        }
    }
}
 obj.items.push(1)
for(let x of obj){
    console.log(x)
}
```
## 内建迭代器
* 数组、Set、Map都是可迭代对象,即它们内部实现了迭代器,并且提供了3种迭代器函数调用
```
const arr = ['a','b','c']
```
1. entries()  返回迭代器 :返回键值对
```
for(let v of arr.entries()){
    console.log(v)
}
```
2. values() 返回迭代器
3. keys() 返回迭代器
## 循环结构
* 对象本身不支持迭代，但是我们可以自己添加一个生成器，返回一个key，value的迭代器，然后使用for of循环解构key和value。
```
const obj = {
    a:1,
    b:2,
    *[Symbol.iterator](){
        for(let i in obj){
            yield [i,obj[i]]
        }
    }
}

for(let [key,value] of obj){
    console.log(key,value)
}
```
## 字符串迭代器
```
const str = 'abc'
for(let v of str){
    console.log(v)
}
```
## NodeList迭代器
```
const divs  = document.getElementByTagName('div)
for(let d of divs){
    console.log(d)
}
```
## 展开运算符和迭代器
```
const a = [1,2,3]
const b = [4,5,6]
const c = [...a,..b]
```
## 高级迭代器功能
* 传参、抛出异常、生成器返回语句、委托生成器
1. 传参
* 生成器里面有2个yield,当执行第一个next()的时候,返回value为1,然后给第二个next()传入参数10,传参的参数会替换掉上个next()de yield的返回值。
2. 在迭代器中抛出错误
```
function *createIterator(){
    let first = yield 1
    yield first + 2
}
let i = createIterator()
i.throw(new Error('error'))

```
3. 生成器返回语句
* 生成器中添加return 表示对出操作
```
funciton *createIterator(){
    let firtst = yield 1
    return ;
    yield first + 2
}
```
4. 委托生成器
* 生成器嵌套生成器
```
 function *aIterator() {
      yield 1;
    }
    function *bIterator() {
      yield 2;
    }
    function *cIterator() {
      yield *aIterator()
      yield *bIterator()
    }
    
    let i = cIterator();
    console.log(i.next()); // {value: 1, done: false}
    console.log(i.next()); // {value: 2, done: false}

```