## javascript对象的特征
1. 对象具有唯一标示性：即使完全相同的两个对象,也并非同一个对象。 内存地址
2. 对象有状态:对象具有状态,同一对象可能处于不同状态之下。
3. 对象具有行为：即对象的状态,可能因为它的行为产生变迁。
* 各种语言的对象唯一标识性都是用内存地址来体现的， 对象具有唯一的标识
* 在 JavaScript 中，将状态和行为统一抽象为“属性”，考虑到 JavaScript 中将函数设计成一种特殊对象（关于这点，我会在后面的文章中详细讲解，此处先不用细究），所以 JavaScript 中的行为和状态都能用属性来抽象。
  
```
    var o = { 
        d: 1,
        f() {
            console.log(this.d);
        }    
    };

```
* <strong>在实现了对象基本特征的基础上, 我认为，JavaScript 中对象独有的特色是：对象具有高度的动态性，这是因为 JavaScript 赋予了使用者在运行时为对象添改状态和行为的能力。</strong>

## JavaScript 对象的两类属性
* 数据属性
<ul>
<li>value：就是属性的值。</li>
<li>writable：决定属性能否被赋值。</li>
<li>enumerable：决定 for in 能否枚举该属性。</li>
<li>configurable：决定该属性能否被删除或者改变特征值。</li>
</ul>

* 访问器(getter/setter)属性
<ul>
<li>getter：函数或 undefined，在取属性值时被调用。</li>
<li>setter：函数或 undefined，在设置属性值时被调用。</li>
<li>enumerable：决定 for in 能否枚举该属性。</li>
<li>configurable：决定该属性能否被删除或者改变特征值。</li>
</ul>



   ```
   var o = { a: 1 };
    o.b = 2;
    //a 和 b 皆为数据属性
    Object.getOwnPropertyDescriptor(o,"a") // {value: 1, writable: true, enumerable: true, configurable: true}
    Object.getOwnPropertyDescriptor(o,"b") // {value: 2, writable: true, enumerable: true, configurable: true}

   ```
  
  * Object.defineProperty
  * Object.getOwnPropertyDescripto
  * 创建对象时,也可以使用get和set关键字来创建访问器属性
  *  var o = { get a() { return 1 } }  console.log(o.a) 
  *  <p>这样，我们就理解了，实际上 JavaScript 对象的运行时是一个“属性的集合”，属性以字符串或者 Symbol 为 key，以数据属性特征值或者访问器属性特征值为 value。</p>


   * 在这篇文章中，从对象的基本理论出发，和你理清了关于对象的一些基本概念，分析了 JavaScript 对象的设计思路。接下来又从运行时的角度，``` 介绍了 JavaScript 对象的具体设计：具有高度动态性的属性集合 ```。



* ![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E9%87%8D%E5%AD%A6%E5%89%8D%E7%AB%AF/img/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1%E5%8E%9F%E7%94%9F%E5%AF%B9%E8%B1%A1.png)
