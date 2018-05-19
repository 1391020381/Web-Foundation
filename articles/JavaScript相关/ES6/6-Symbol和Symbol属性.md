## 原始数据类型
* null undefined  Number String  boolean 
## Symbol
* 在MDN文档中,关于Symbol的说明是这样的：
* Symbol是 一种特殊的的、不可变的数据类型,可以作为对象属性的标识符使用。Symbol对象是一个symbol primitive data type 的隐士对象包装器。
## Symbol的语法格式
* Symbol(description) // descripyion 是可选的
* Symbol 不能使用new
## Symbol的使用 
* 在所有使用计算属性名的地方,都能使用Symbol类型。比如在对象中的key
```
const name = Symbol('name')
const obj = {
    [name]:'haha'
}

```
* Object.defineProperty()
* Object.defineProperties()
## Symbol全局共享
* 需要注意的是,Symbl.for为Symbol值登记的名字,是全局环境的,可以在不同的iframe或者 service worker中取到同一个值。
```
iframe = document.crateElement('iframe')
iframe.src = String(window.loacation)
document.body.appendChild(iframe)
iframe.contentWindow.Symbol.for('foo') = Symbol.for('foo')

```
## Symbol与类型强制转换
* Symbol 不支持这种转换。