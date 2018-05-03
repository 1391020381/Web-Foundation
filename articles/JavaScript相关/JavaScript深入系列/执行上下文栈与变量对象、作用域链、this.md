# 可执行代码
 * 全局代码、函数代码、eval代码
# 执行上下文(Execution context stack ,ECS)数组
* 当JavaScript代码执行一段执行代码(executable code)时,会创建对应的执行上下文(execution context)
## 执行上下文,都有三个重要属性
* 变量对象(Variable object ,VO)
* 作用域链(Scope chain)
* this
## 变量对象
* 变量对象是与执行上下文相关的数据作用域,储存了在上下文中定义的变量和函数声明。
* 因为不同执行上下文的变量对象稍有不同,所以我们说说全局上下文的变量对象和函数上下文的变量对象。
### 全局上下文(W3School介绍)
* 全局对象是预定义的对象,作为JavaScript的全局函数和全局属性的占位符。通过使用全局对象,可以访问所有其他所有预定义的对象、函数和属性。
* 在顶层JavaScript代码中,可以用关键子this引用全局对象。因为全局对象是作用域链的头,这意味着所有非限定性的变量和函数名都会作为该对象的树来查询。
* 全局上下文的变量对象就是全局对象
### 函数上下文
* 在函数上下文中,我们用活动对象(activation object, AO)来表示变量对象。
* 活动对象和变量对象其实是一个东西,只是变量对象时规范的或者说是引擎实现的,不可在JavaScript环境中访问,只有到当进入以执行上下文中,这个执行上下文的变量对象才会被激活,所以才叫activation objects，而只有被激活的变量对象,也就是激活对象上的各种属性才能被访问。
* 活动对象是在进入函数上下文时刻被创建的,它通过函数的argumnets属性初始化。arguments属性值是 Arauments对象。
### 执行过程
* 分析(进入执行上下文)
* 代码执行(执行)
### 进入执行上下文
 变量对象包括：

 1. 函数的所有形参(如果是函数上下文)

    * 由名称和对应值组成的一个变量对象的属性被创建
    * 没有实参,属性值设为undefined
 2. 函数声明
    * 由名称和对应值(函数对象(function-object))组成一个变量对象的属性被创建。
    * 如果变量对象以存在相同名称的属性,则完全替换这个属性。
 3. 变量声明
    * 由名称和对应值(undefined)组成一个变量对象的属性被创建
    * 如果变量名称跟已经声明的形式参数或函数相同,则变量声明不会干扰已经存在的这类属性。
# 总结
1. 全局上下文的变量对象初始化是全局对象
2. 函数上下文的变量对象初始化值包括Aragument对象
3. 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始化的属性值
4. 在代码执行阶段,会再次修改变量对象的属性值。

# 作用域链
* 但查找变量的时候,会先从当前上下文的变量对象中查找,如果没有找到,就会从父级(词法作用域层面上的父级)执行上下文的变量对象中查找,一直找到全局上下文的变量对象,也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。
### 函数创建
* 函数的作用域在函数定义的时候就决定了。这是因为函数有一个内部属性[[scope]]，当函数创建的时候,就会保存所有变量对象到其中,可以理解[[scope]]就是所有父变量对象的层级链,但是注意：[[scope]]并不代表完整的作用域链！
```
function foo(){
    function bar(){}
}
```
* foo.[[scope]] = [ golobalContext.VO ]
* bar.[[scope]] = [ fooContext.AO,globalContext.VO ]
## 函数激活
* 当函数激活时,进入函数上下文,创建VO/A0 后,就会将活动对象添加到作用链的前端
*  这时执行上下文的作用域链,命名为Scope： Scope = [AO].concat([[Scope]])
# 总结
```
var scope  = 'global scope'
function checkscope(){
    var scope2 = 'local scope'
    return scope2
}

checkscope()

```
1. chheckscope函数被创建,保存作用域链到内部属性[[scope]]
    * checkscope.[[scope]] = [globalContext.Vo]
2. 执行checkscope函数,创建checksopce函数执行上下文,checkscope函数执行上下文被压入 执行上下文栈
    * ECStack = [
        checkscopeContext,
        globalContext
    ]
3. checkscope函数并不立刻执行,开始做准备工作,第一步：复制函数[[scope]]属性创建作用域链
    * checkscopeContext = {Scope:checkscope.[[scope]]}
4. 第二步：用arguments创建活动对象,随后初始化活动对象,加入形参、函数声明、变量声明
   * checkscopeContext = {
       AO: {
           arguments:{
               length:0
           },
           scope2:undefined
       },
       Scope:checkscope.[[scope]]
   }           
 5. 第三部：将活动对象压入checkscope作用域链顶端  
    * checkscopeContext = {
        AO:{
            argument:{
               length:0 
            },
            scope2:undefined
        },
        Scope:[AO,[[Scope]]]
    }
 6. 准备工作做完,开始执行函数,随着函数的执行,修改AO的属性值
    *  checkscopeContext = {
        AO:{
            arguments:{
                length:0
            },
            scope2:'local scope'
        },
        Scope:[AO,[[Scope]]]
    }
 7. 查找到scope2的值,返回后函数执行完毕,函数上下文从执行上下文栈弹出
    * ECStack = [ globalContext ]   