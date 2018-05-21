# ES5中的近类结构
* ES5以及之前的版本,没有类的概念。
* ES5中创建类的方法:新建一个构造函数,定义一个方法并且赋值给构造函数。
```
'use strict'
function Person(name){
  this.name = name
}
Person.prototype.sayName = function(){
  retrun this.name
}
var p = new Person('eryue')
p.sayName()
```
# ES6 class类
## 类声明
```
class Person{
  constructor(name){
   this.name = name
  }
  sayName(){
  return this.name
  }
 }

let p = new Person('eryue')
p.sayName()
```
* 和ES5中使用构造函数不同的是,在ES6中,我们将原型的实现写在了类中,单本质上还是一样的,都是需要新建一个类名,然后实现构造函数,再实现原型的方法。
* 私有属性：在class中实现私有属性,只需要在构造函数方法中定义this.xx = xx
## 类声明和函数的区别和特点
1. 函数声明可以被提升,类声明不能提升。
2. 类声明中的代码自动强行运行在严格模式下。
3. 类中的所有方法都是不可枚举的,而自定义类型中,可以通过Object.defineProperty()手动指定不可枚举属性。
4. 每个类都有一个[[construct]]
5. 只能使用new 来调用类的构造函数。
6. 不能在类中修改类名。
## 类表达式
```
// 声明式
class B{
  constructor(){ }
  }
  // 匿名表达式
  let A = class{
   constructor(){}
  }
// 命名表达式,B可以在外部使用,而B1只能在内部使用

 let B = class B1 {
  constructor(){ }
 }
```
# 类是一等公民
* JavaScript函数是一等公民,类也设计成一等公民
1. 可以将类作为参数传入函数。
2. 通过立即调用类构造函数可以创建单例
```
let a = new class{
  constructor(name){
   this.name = name
  }
  sayName(){
  return this.name
  }
  }('eryue')
  a.sayName()
```
## 访问器属性
```
class S {
  constructor() {
    // ...
  }
  get prop() {
    console.log('prop------------------')
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
 get s() {

    console.log('s-------------------------')
    return 'getter';
  }
  set s(value) {
    console.log('setter: '+value);
  }
}
```
## 可计算成员名称
```
let m = 'sayName'
class = A{
 constructor(name){
   this.name = name
 }
 [m](){
  return this.name
 }
}
```
## 生成器方法
```
class A{
  *printId(){
   yield 1;
   yield 2;
   yield 3;
  }
 }
 let a = new A();
 A.printId().next()
```
## 静态成员
* 静态成员是指在方法名或属性名前面加上static关键字,和普通方法不一样的是,static修饰的方法不能在实例中访问,只能在类中直接访问
```
class A{
 constructor(name){
  this.name = name
 }
 static create(name){
  return new A(name)
 }
}
```
## 继承与派生类
```
class Component{
 constructor([a,b] = props){
  this.a = a
  this.b = b
 }
 add(){
  return this.a + this.b
 }
}
 class T extends Component{
  constructor(props){
    super(props)
  }
 }
 let t  = new T([2,3])
```
### 关于super使用的几点要求：
1. 只在可以在派生类中使用super。派生类是指继承自其它类的新类。
2. 在构造函数中访问this之前要调用 super(),负责初始化this

