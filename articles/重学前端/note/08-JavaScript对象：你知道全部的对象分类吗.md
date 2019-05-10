## JavaScript 中的对象分类
<ul>
<li>
<p>宿主对象（host Objects）：由 JavaScript 宿主环境提供的对象，它们的行为完全由宿主环境决定。</p>
</li>
<li>
<p>内置对象（Built-in Objects）：由 JavaScript 语言提供的对象。</p>
<ul>
<li>固有对象（Intrinsic Objects ）：由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例。</li>
<li>原生对象（Native Objects）：可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象。</li>
<li>普通对象（Ordinary Objects）：由{}语法、Object 构造器或者 class 关键字定义类创建的对象，它能够被原型继承。</li>
</ul>
</li>
</ul>

## 宿主对象
* 宿主对象也分为固有的和用户可创建的两种
* document.createElement
* new Image

## 内置对象*固有对象
* 我们在前面说过,固有对象是由标准规定,随着javascript运行时创建而自动创建的对象实例。

## 内置对象*原生对象
* 我们把JavaScript中，能够通过语言本身的构造器创建的对象称作原生对象。
* 几乎所有这些构造器的能力都是无法用纯 JavaScript 代码实现的，它们也无法用 class/extend 语法来继承。

## 用对象来模拟函数与构造器：函数对象与构造器对象
* 函数对象的定义是:具有[[call]]私有字段的对象,构造器对象的定义是:具有私有字段[[construct]]的对象
* JavaScript用对象模拟函数的设计代替了一般编程语言中的函数,他们可以像其他语言的函数一样被调用、传参。任何宿主只要提供了 "具有[[call]]私有字段的对象",就可以被javascript函数调用语法支持。


```
[[call]] 私有字段必须是一个引擎中定义的函数，需要接受 this 值和调用参数，并且会产生域的切换，这些内容，我将会在属性访问和执行过程两个章节详细讲述。

```

```  值得一提的是 在 es6 之后 => 语法创建的函数仅仅是函数,它们无法被当作构造器使用  ```

* 这样的规则造成了个有趣的现象，如果我们的构造器返回了一个新的对象，那么 new 创建的新对象就变成了一个构造函数之外完全无法访问的对象，这一定程度上可以实现“私有”。


```

function cls(){
    this.a = 100;
    return {
        getValue:() => this.a
    }
}
var o = new cls;
o.getValue(); //100
//a 在外面永远无法访问到


```


## 特殊对象

<ul>
<li>Array：Array 的 length 属性根据最大的下标自动发生变化。</li>
<li>Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。</li>
<li>String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。</li>
<li>Arguments：arguments 的非负整数型下标属性跟对应的变量联动。</li>
<li>模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。</li>
<li>类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。</li>
<li>bind 后的 function：跟原来的函数相关联。</li>
</ul>