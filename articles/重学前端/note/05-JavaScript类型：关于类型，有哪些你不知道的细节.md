<ul>
<li>为什么有的编程规范要求用 void 0 代替 undefined？</li>
<li>字符串有最大长度吗？</li>
<li>0.1 + 0.2 不是等于 0.3 么？为什么 JavaScript 里不是这样的？</li>
<li>ES6 新加入的 Symbol 是个什么东西？</li>
<li>为什么给对象添加的方法能用在基本类型上？</li>
</ul>


* 运行时类型是代码实际执行过程中我们用到的类型。所有的类型数据都会属于7个类型之一。从变量、参数、返回值到表达式中间结果,任何JavaScript代码运行过程中产生的数据,都具有运行时类型。

# 类型
* javascript语言的每个值都属于某个数据类型。JavaScript语言规定了7种语言类型。
* 语言类型广泛用于变量、函数参数、表达式、函数返回值等场合。
1. Undefined
2. Null
3. Boolean
4. String
5. Number
6. Symbol
7. Object

## Undefined 、 Null
* Undefined 类型表示未定义,它的类型只有一个值,就是 undefined。
* 任何变量在赋值前是Undefined类型、值为undefined,一般我们可以用全局变量 undefined(就是名为undefined的这个变量)来表达这个值,或者void运算符来把一个表达式变成undefined值。
* 因为javascript的代码undefined是一个变量,而并非是一个关键字,这是javascript语言公认的设计失误之一,```所以,我们为了避免无意中被篡改,建议使用void 0 获取undefined值```
* null表示的是:定义了但是为空.所以在实际编程时,我们一般不会把变量赋值为 undefined,这样可以保证所有值为 undefined的变量 都是从未赋值的自然状态。
* Null类型也只有一个值,就是null,它的语义表示空值,与undefined不同,null是javascript关键字,所以在任何代码中,你都可以放心用null关键字获取值。
## Boolean
* Boolean类型有两个值,true和false它用于表示逻辑意义上的真假,同样有关键字true和false来表示两个值。
## String
* String用于表示文本数据。String有最大长度是 2^53-1。 
* 最大长度,并不完全是理解中的字符数。
* 字符串的最大长度,实际上是受字符串的编码长度影响。
* JavaScript中字符串是永远无法变更的,一旦字符串构造出来,无法用任何方式改变字符串的内容,所以字符串具有值类型的特征。

*  JavaScript 字符串把每个 UTF16 单元当作一个字符来处理，所以处理非 BMP（超出 U+0000 - U+FFFF 范围）的字符时，你应该格外小心。

* JavaScript 这个设计继承自 Java，最新标准中是这样解释的，这样设计是为了“性能和尽可能实现起来简单”。因为现实中很少用到 BMP 之外的字符。

## Number
* JavaScript 中的 Number 类型有 18437736874454810627(即 2^64-2^53+3) 个值。
* NaN，占用了 9007199254740990，这原本是符合 IEEE 规则的数字
* Infinity，无穷大
* -Infinity，负无穷大。
* 而区分 +0 和 -0 的方式，正是检测 1/x 是 Infinity 还是 -Infinity。

* ``` 同样根据浮点数的定义,非整数的Number类型无法用 == （===也不行） 来比较,例如 0.1 + 0.2 == 0.3 ```

* Number.EPSILON 属性表示 1 与Number可表示的大于 1 的最小的浮点数之间的差值。
* EPSILON 属性的值接近于 2.2204460492503130808472633361816E-16，或者 2-52。

## Symbol
* Symbol是ES6中引入的新类型,它是一切非字符串的对象key的集合,在ES6规范中,整个对象系统被用Symbol重塑。
* Symbol 可以具有字符串类型的描述，但是即使描述相同，Symbol 也不相等。
```
var mySymbol00 = Symbol('00')
var mySymbol11 = Symbol('11')
mySymbol00 === mySymbol11  // false


    var o = new Object

    o[Symbol.iterator] = function() {
        var v = 0
        return {
            next: function() {
                return { value: v++, done: v > 10 }
            }
        }        
    };

    for(var v of o) 
        console.log(v); // 0 1 2 3 ... 9


```

## Object
* Object是JavaScript中最复杂的类型,也是javaScript的核心机制之一。Object表示对象的意思,它是一切有形和无形物体的总称。
* 在JavaScript中,对象的定义是 属性的集合 属性分为数据属性 和访问属性,二者都是 key-value结构,key可以是字符串或者Symbol类型。
* 事实上,javascript中的 类  仅仅是运行时对象的一个私有属性,而javascript中是无法自定义类型的。
* Number String Boolean 三个构造器是两用的,当跟 new搭配时,它们产生对象,当直接调用时,它们表示强制类型转换。
* Symbol 函数比较特殊，直接用 new 调用它会抛出错误，但它仍然是 Symbol 对象的构造器。
* ```  运算符提供了装箱操作,它会根据基础类型构造一个临时对象,使得我们能在基础类型上调用对应对象的方法 ```

## 类型转换

### StringToNumber
* 多数情况下,Number是比parseInt 和 parseFloat更好的选择

### NumberToString
* 在较小的范围内,数字到字符串的转换是完全符合你直觉的十进制。
* 当Number绝对值较大或者较小时,字符串表示则是使用科学计数法表示的。
### 装箱转换
* 每一种基本类型 Number String Boolean Symbol在对象都有对应的类,所谓装箱转换,正是把基本类型转换为对应的对象,它是类型转换中一种相当重要的种类。
* 在 JavaScript 中，没有任何方法可以更改私有的 Class 属性，因此 Object.prototype.toString 是可以准确识别对象对应的基本类型的方法，它比 instanceof 更加准确。
* 但需要注意的是，call 本身会产生装箱操作，所以需要配合 typeof 来区分基本类型还是对象类型。

### 拆箱转换
* 拆箱转换会尝试调用 valueOf 和 toString来获取拆箱后的基本类型。如果 valueOf和toString都不存在,或者没有返回基本类型,则会产生类型错误TypeError

```

    var o = {
        valueOf : () => {console.log("valueOf"); return {}},
        toString : () => {console.log("toString"); return {}}
    }

    o * 2
    // valueOf
    // toString
    // TypeError


```
* 在 ES6 之后，还允许对象通过显式指定 @@toPrimitive Symbol 来覆盖原有的行为。
```
    var o = {
        valueOf : () => {console.log("valueOf"); return {}},
        toString : () => {console.log("toString"); return {}}
    }

    o[Symbol.toPrimitive] = () => {console.log("toPrimitive"); return "hello"}


    console.log(o + "")
    // toPrimitive
    // hello


```

## 总结
* 除了这七种语言类型，还有一些语言的实现者更关心的规范类型。
<ul>
<li>List 和 Record： 用于描述函数传参过程。</li>
<li>Set：主要用于解释字符集等。</li>
<li>Completion Record：用于描述异常、跳出等语句执行过程。</li>
<li>Reference：用于描述对象属性访问、delete 等。</li>
<li>Property Descriptor：用于描述对象的属性。</li>
<li>Lexical Environment 和 Environment Record：用于描述变量和作用域。</li>
<li>Data Block：用于描述二进制数据。</li>
</ul>