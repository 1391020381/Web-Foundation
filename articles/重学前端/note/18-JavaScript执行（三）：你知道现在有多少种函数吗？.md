* 在JavaScript,切换上下文最主要的场景是函数调用。

## 函数
1. 第一种,普通函数：用 function 关键字定义的函数

```
function foo () {
   // code
}

```

2. 第二种,箭头函数:用 => 运算符定义的函数

```

const foo = () => {
  // code
}

```

3. 第三种,方法：在 class 中定义的函数

```
class Foo {
  constructor () {
    // code
  }
}


```

4. 第六/七/八种,异步函数：普通函数、箭头函数和生产器函数加上 async关键字

```

async function foo () {
  // code
}
const foo = async ()=>{
  // code 
}

async function foo * (){
  // code
}
```

* 对普通变量而言,这些函数并没有本质区别,都是遵守了 "继承定义时环境" 的规则,它们的一个行为差异在于 this关键字

## this关键字的行为

```
function showThis(){
    console.log(this);
}

var o = {
    showThis: showThis
}

showThis(); // global
o.showThis(); // o


```

* 普通函数的 this 值由 "调用它所使用的引用" 决定,其中奥秘就在于:我们获取函数的表达式,它实际上返回的并非函数本身,而是一个 Reference类型(在类型一章讲过7种标准类型之一。)
* Reference 类型由两部分组成:一个对象和一个属性值。不难理解 o.showThis产生Reference类型,即由对象o和属性"showThis"构成
* Reference类型中的对象被当做 this值,传入了执行函数时的上下文当中。
* ```  调用函数时使用的引用,决定了函数执行时刻的this值  ```
* 实际上运行时的角度来看,this跟面向对象毫无关联,它是与函数调用时使用的表达式相关。
* 我们看到，改为箭头函数后，不论用什么引用来调用它，都不影响它的 this 值。


## this 关键字的机制



* 嵌套的箭头函数中的代码都指向外层 this

<h2>补充阅读：new 与 this</h2>
 <ul>
<li>以构造器的 prototype 属性（注意与私有字段 [[prototype]] 的区分）为原型，创建新对象；</li>
<li>将 this 和调用参数传给构造器，执行；</li>
<li>如果构造器返回的是对象，则返回，否则返回第一步创建的对象。</li>
</ul>