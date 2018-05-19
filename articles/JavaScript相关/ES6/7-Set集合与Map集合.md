## 类似于原来的地址的数据<平铺的数据,省  市  县  区>
以areaId作为key来组织数据tree类型的数据
* Map和Set都叫做集合,但是他们也有所不同。Set常被用来检查对象中是否存在某个键名,
Map集合常被用来获取已存在的信息。
# Set 
* Set是有序列表,含有相互独立的非重复值,类似与数组
# 创建Set
```
let set  = new Set()

```
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/JavaScript%E7%9B%B8%E5%85%B3/img/Set.png)
## Set基础原型的作用
1. Set.prototype.size 返回Set对象的值的个数
2. Set.prototype.add(value)
3. Set.prototype.entries()
4. Set.prototype.forEach(callbackFn[,thisArg]) 
5. Set.prototype.has(value)
## 迭代Set
* Set.prototype.forEach(callbackFn[,thisArg])
* Set.prototye.entries()
```
let set = new Set()
set.add('haha')
set.add(Symbol('haha'))
for(let [key,value] of set.entries()){
    console.log(key,value)
}

```
## Set和Array的转换
* Set和数组太像了,Set集合的特点是没有Key,没有下标,只有size和原型以及一个可迭代的不重复元素的数组。
* Array.from方法用于将两类对象转换为真正的数组：类似数组的对象(array-like-object)
和可遍历(iterable)的对象(包括ES6新增的数据结构SetH和Map)
```
const arr = [1,2,3,4]
let set = new Set(arr)
Array.from(set)
```
## Weak Set集合
* Set集合本身是强引用,只要 new Set()实例化的引用存在,就不释放内存,这样一刀切肯定不好啊,比如你定义了一个DOM元素的Set集合,然后在某个js中引用了该实例,但是当页面关闭或者跳转时,你希望该引用应立即释放内存,Set不听话,那好,可以使用Weak Set
## Set的区别
1. WeakSet对象中只能存在对象值,不能存放原始值,而Set对象都可以
2. WeakSet对象中存储的对象值都是被弱引用的,如果没有其他的变量或属性引用这个对象值,则这个对象值会被当做垃圾回收掉,正因为这样,WeakSet对象时无法被枚举的,没办法拿到它包含的所有元素。

# Map
* 