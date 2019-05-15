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

* ![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E9%87%8D%E5%AD%A6%E5%89%8D%E7%AB%AF/img/%E8%AF%AD%E5%8F%A5%E5%88%86%E7%B1%BB.jpg)

### 普通的语句
* 在javascript中,我们把不带控制能力的语句称为普通语句。

### 语句块

* 语句块就是拿大括号括起来的一组语句,它是一种语句的复合结构,可以嵌套。

### 控制型语句

### 带标签的语句