# new 
* new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一。##
## new 实现的功能
* 访问到构造函数里的属性
* 访问到构造函数的prototype中的属性
## 使用new 操作符调用构造函数会经历以下4个步骤：
1. 创建一个新对象
2. 将构造函数的作用域赋给新对象<因此this就指向了这个新对象>
3. 执行构造函数中的代码(为这个新对象添加属性)
4. 返回新对象。
```
// 实现一个函数,传入 构造函数和参数 实现 new关键字   <new Otaku('a','b')>

function objectFactory(){
    var obj = new Object(),
    Constructor = [].shift.call(argument)
    obj.__proto__ = Constructor.prototype
    Constructor.apply(obj,arguments)
    return obj
}

```

```
function objecFactory{
    var obj = new Object()
    Constructor = [].shift.call(argument)
    obj.__proto__ = Constructor.prototype
    var  ret = Constructor.apply(obj,arguments)
    return typeof ret ==='object'?ret:obj
}

```
