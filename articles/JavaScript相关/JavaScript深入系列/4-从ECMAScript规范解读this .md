# Types
* ECMAScript的类型分为语言类型和规范类型。
* ECMAScript的语言类型是开发者直接使用ECMScript可以操作的。其实就是我们常说的Udefined、Null、Boolean、String、Number、和Object。
* 规范类型相当于meta-values，是用来用算法描述ECMAScript语言结构和ECMAScript语言类型的。Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, 和 Environment Record
* 需要知道在ECMAScript规范中还有一种只存在于规范中的类型,它们的作用是用来描述语言底层行为逻辑。
* Reference类型。它与this的指向有着密切的关联。
# Reference
* Reference类型就是用来解释诸如delete、typeof以及赋值等操作行为的。
* Reference的构成,由三个组成部分,分别是： 1. base value  2. referenced name 3. strict reference
* base value 就是属性所在的对象或者就是 EnvironmentRecord,它的值只可能是 undefined、 an Object a Boolean、 a String、 a Number、 or environment record其中的一种。
* referenced name 就是属性的名称。 
## GetBase
* GetBase返回reference的basevalue
##  IsPropertyReference
* 如果是base value 是一个对象,就返回true
## GetValue
* 从Reference类型获取对应值的方法<调用GetValue,返回的将是具体的值,而不是一个Reference>
# 如何确定this的值
1. 计算MemberExpression 的结果赋值给ref
2. 判断ref是不是一个Reference类型
   * 如果ref 是Reference,并且IsPropertyReference(ref)是true,那么this的值为GetBase(ref)
   * 如果ref是Reference,并且base value值时Environment Record,那么this值为ImplicitThisValue(ref)
   * 如果ref不是Reference,那么this的值为undefined
##表达式
* 简单理解MemberExpression其实就是()左边的部分 
## 是否是Reference
* Return a value of type Reference whose base value is baseValue and whose referenced name is propertyNameString, and whose strict mode flag is strict.  
* ImplicitThisValue 方法的介绍：该函数始终返回 undefined。
##  某些操作符与Reference
* = ||  ,  都使用了 GetValue() 不是Reference类型,this为undefined

```

var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

//示例1
console.log(foo.bar()); // 2
//示例2
console.log((foo.bar)()); // 2
//示例3
console.log((foo.bar = foo.bar)()); // 1
//示例4
console.log((false || foo.bar)()); // 1
//示例5
console.log((foo.bar, foo.bar)()); // 1



```