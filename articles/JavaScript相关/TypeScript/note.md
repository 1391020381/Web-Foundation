* [TypeScript 入门教程](https://github.com/xcatliu/typescript-tutorial)
* [TypeScript Deep Dive 中文版 ](https://github.com/jkchao/typescript-book-chinese)

# interface 
1. 定义形状
2. 定义行为


* interface class Generics(泛型)
* 在面向对象语言中,接口(interfaces)是一个很重要的概念,它是对行为的抽象,而具体如何行动需要由类(class)出实现(implements)
* 泛型(Generics) 是指在定义函数、接口或类的时候,不预定指定具体的类型,而在使用的时候再指定类型的一种特性。



# 类型断言
* 类型断言(Type Assertion) 可以用来手动指定一个值得类型
* <类型>值  或  值 as 类型   在tsx语法(React的jsx语法的ts版)中必须用后一种
* 比如 将一个联合类型的变量指定为一个更加具体的类型



# 总结
1. 类型断言  <类型>值 值 as 类型  类型断言(Type Assertion) 可以用来手动指定一个值的类型
2. 接口 interface 定义形状和行为 class 出 实现  implements
3. 泛型(Generics) 定义函数、接口、类  <T>
* `我们的函数名后添加了 <T> 其中 T 用来指代任意输入的类型,在后面的输入 value:T 和输出 Array<T> 中即使用了。`
*  泛型约束   在函数内部使用泛型变量的时候,由于事先不知道它是哪种类型,所以不能随意的操作它的属性或方法
*  我们可以对泛型进行约束,只允许这个函数传入那些包含length属性的变量,即泛型约束
*  泛型约束
*  泛型接口
*  泛型类
```
// 我们在函数名后添加了<T> 其中 用来指代任意输入的类型,在后面的输入 value:T和输出 Array<T>中即可使用了。
// 具体在调用的时候,可以指定它具体的类型为string.
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = []    // 类型 + 方括号     let fibonacci:number[] = [1,2,3,4]
    for (let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}


function swap<T, U>(tuple: [T, U]): [U, T] {  // 我们定义了一个swap函数,用来交换输入的元组
    return [tuple[1], tuple[0]]
}

console.log(swap([7, 'seven']))

interface Lengthwise{
    length:number
}

function loggingIdentity<T extends Lengthwise>(arg:T):T{
    console.log(arg.length)
    return arg
}
```

1. 类型的推论
* 数组的类型 let fibonacci:number[] = [1,2,4,5]
* 数组泛型  Array<elemType> 来表示数组  let fibonacci: Array<number> = [1,2,3,,4]
* 用接口表示数组  
```
interface NumberArray{
    [index:number]:number;
}

let fibonacci NumberArray = [1,2,3]

```

# 类的概念
* 介绍类相关的概念
1. 类 Class
2. 对象 Object
3. 面向对象(OOP)的三大特性: 封装、继承、多态
4. 封装
5. 继承
6. 多态
7. getter setter 用以改变属性的读取和赋值行为
8. 修饰符(Modifiers) 修饰符是一些关键字,用于限定成员或类型的性质。比如public表示公有属性或方法
* public 修饰符的属性或方法是公有的,可以在任何地方被访问到,默认所有的属性和方法都是public的。
* private 修饰符的属性或方法是私有的,不能再声明它的类的外部访问
* protected 和 private类似 区别是它在子类中也是被允许被访问的
9.  抽象类 Abstract Class 抽象类是提供其他类继承的基类,抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
10. 接口(interfaces) 不同的类之间公有的属性或方法,可以抽象成一个接口。接口可以被类实现(implements)。一个类只能继承自另一个类,但是可以实现多个接口

