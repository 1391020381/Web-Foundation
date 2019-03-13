interface Person {
  name:string;
  age?:number;
  [propName:string]:any
}

let tom:Person = {  // 可选  任意
  name:'Tom',
  age:25,
  gender:'male',
  ssssss:'wrwrwe'
}

function sum(x:number,y:number):number{
  return x +y;
}
sum(1,2)

let mySum:(x:number,y:number)=>number = function(x:number,y:number):number{
  return x + y;
}
/// 在TypeScript的类型定义中, =>用来表示函数的定义,左边的输入类型,需要用括号 括号括起来,左边是输出类型

interface SearchFunc {
  (source:string,subString:string):boolean
}

let mySearch:SearchFunc;
mySearch = function(source:string,subString:string){
  return source.search(subString)!==-1
}

// 需要注意的是, k可选参数必须接在必须参数的后面。换句话说,可选参数后面不允许再出现必须参数了。

function buildName(firstName:string,lastName?:string){
  if(lastName){

  }else{
    return firstName
  }
}
// 参数默认值
function bildName2(firstName:string,lastName:string='Cat'){
  return firstName + '' + lastName
}

function push(array:any[],...items:any[]){
  items.forEach(function(item){
    array.push(item)
  })
}

function reverse(x:number):number;
function reverse(x:string):string;
function reverse(x:number|string):number|string{
  if(typeof x === 'number'){
    return Number(x.toString().split('').reverse().join())
  }else if(typeof x === 'string'){
    return x.split('').reverse().join()
  }
}

// <类型> 值      值 as 类型

function getLength(something:string|number):number{
  if((<string>something).length){
    return (<string>something).length
  }else{
    return something.toString().length
  }
}

// 当使用第三方库时,我们需要引用它的申明文件,才能获得对应的代码补全、接口提示等功能。



// 申明文件
//  declare var 
// declare function
// declare class
// declare enum  声明全局枚举类型
// declare namespace 声明全局对象(含有子属性)
// interface  type声明全局类型
// 一般来说,全局变量都是禁止修改的常量,所以大部分情况都应该使用 const 而不是 var 或 let
// 需要注意的是 ,声明语句中只能定义类型,切勿在声明语句中定义具体的值

// declare class Animal{
//   constructor (name:string);
//   sayHi();
// }

type Name  = string;
type NameResolver = ()=> string;
type NameOrResolver = Name | NameResolver
function getName(n:NameResolver):Name{
  if(typeof n === 'string'){
    return n;
  }else{
    return n()
  }
 
}
type EventName = 'click' | 'scroll' | 'mousemove';

function handleEvent(ele:Element,event:EventName){

}
handleEvent(document.getElementById('hello'),'scroll')
//handleEvent(document.getElementById('world'),'dbclick')

// 数组合并了相同类型的对象,而元组(Tuple)合并了不同类型的对象


enum Days {Sum,Mon,Tue,Wed,Thu,Fri,Sat};

// 类 定义了一件事物的抽象特点,包含它的属性和方法
// 对象(Object)类的实例 通过 new 生成
// 面向对象(oop)的三大特性:封装 继承 多态
// 封装
// 继承
// 多态  由 继承而产生了相关的不同的类,对同一个方法可以由不同的响应。比如Cat和Dog都继承自 Animal 但是分别实现了自己的 eat方法。此时 针对某个实例,我们无需了解它是Cat还是Dog
// 就可以直接调用eat方法，程序会自动判断出来应该如何执行eat
// 存储(getter setter)用以改变属性的读取和赋值行为
// 修饰符(Modifiers) 修饰符 是一些关键字,用于限定成员或类型的性质。比如 public 表示 公有属性或方法。
// 抽象类(Abstract Class) 抽象类是提供其他继承的基类,抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
// 接口(Interfaces)不同类之间公有的属性或方法,可以抽象成一个接口。接口可以被类实现(implements) 一个类只能继承自另一个类,但是可以实现多个接口。


class Animal {
  name:string;
  constructor(name:string){
    this.name = name
  }
  sayHi(){
    return `My name is ${this.name}`
  }
 
} 
class Cat extends Animal{
  constructor(name){
    super(name);
    console.log(this.name)
  }
  sayHi(){
    return `Meow` + super.sayHi();
  }
}
