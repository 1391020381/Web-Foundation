# 语句

```

function foo(){
  try{
    return 0;
  } catch(err) {

  } finally {
    return 1;
  }
}

console.log(foo());


```

## Completion 类型

* 这一机制的基础正是 javascript语句执行的完成状态,我们用一个标准类型来表示：Completion Record( 我在类型一节提到过,Completion Record用于描述异常、跳出等语句执行过程)
  
* Completion Record 表示一个语句执行完之后的结果,它有三个字段：
* [[type]]表示完成的类型,有break continue return throw 和 normal几种类型
* [[value]]表示语句的返回值,如果语句没有,则是empty
* [[target]] 表示语句的目标,通常是一个javascript标签(标签在后文有介绍)  

* JavaScript使用Completion Record 类型,控制语句执行过程

