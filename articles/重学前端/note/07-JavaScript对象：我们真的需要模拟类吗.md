* javascript本身就是面向对象的,它不需要模拟,只是它实现面向对象的方式和主流的流派不太一样。
* "模拟面向对象",实际上做的事情就是 "模拟基于类的面向对象"
* 使用 类  的方式描述对象
* 使用原型描述对象
## 什么是原型
* "基于类"的编程思想提倡使用一个关注分类和类之间关系开发模型。在这类语言中,总是先有类,再宠类出实例化一个对象。类与类之间又可能会形成继承、组合等关系。类又往往与语言的类型系统整合,形成一定编译时的能力。
* "基于原型"的编程看起来更为提倡程序员出关注一系类对象实例的行为,而后才去关心如何将这些对象,划分到最近的使用方式相似的原型对象,而不是将它们分成类。
## JavaScript 的原型
* 如果所有对象都有私有字段[[prototype]] 就是对象的原型
* 读一个属性,如果对象本身没有,则会继续方法对象的原型,直到原型为空或者找到为止。
* ES6以来,javascript提供了一系类内置函数,以便更为直接访问操作原型。
1. Object.create 根据指定的原型创建新对象,原型可以是null
2. Object.getPrototypeOf获得一个对象的原型
3. Object.setPrototypeOf设置一个对象的原型

## 早期版本中的类与原型
```
    var o = { [Symbol.toStringTag]: "MyObject" }
    console.log(o + "");


```
* 创建了一个新对象,并且给它唯一的一个属性Symbol.toStringTag,我们用字符串加法触发了Object.prototype.toString()的调用,发现这个属性最终对Object.prototype.toString的结果产生了影响。

* new 运算符接受一个构造器和一组调用参数,实际上做了几件事
1. 以构造器的prototype属性(注意与私有字段[[prototype]]的区分)为原型,创建对象
2. 将 this和调用参数传给构造器,执行。
3. 如果构造器返回的是对象,则返回,否则返回第一步创建的对象。


* new 这样的行为，试图让函数对象在语法上跟类变得相似，但是，它客观上提供了两种方式，一是在构造器中添加属性，二是在构造器的 prototype 属性上添加属性。

```


function c1(){
    this.p1 = 1;
    this.p2 = function(){
        console.log(this.p1);
    }
} 
var o1 = new c1;
o1.p2();



function c2(){
}
c2.prototype.p1 = 1;
c2.prototype.p2 = function(){
    console.log(this.p1);
}

var o2 = new c2;
o2.p2();


```
## ES6中的类

```

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}


```


* 当我们使用类的思想来设计代码时,应该尽量使用class来声明类,而不是用旧语法,拿函数来模拟。
* 在新的 ES 版本中，我们不再需要模拟类了：我们有了光明正大的新语法。而原型体系同时作为一种编程范式和运行时机制存在。