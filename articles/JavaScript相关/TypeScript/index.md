* Ts(TypeScipt)区别于JS一个最大的不同是TS增加了类型。当一些TS代码要使用JS包的时候,最好这些JS包都有类型介绍,比如这个变量是什么类型,返回什么类型参数等等,这个Type Declaration File有点像是C++ 文件,定义了JS包的接口信息,这个文件的后缀是.d.ts。
* 在npm包管理中,有一类@type/package的包,就是别人已经写好了的对应package的.d.ts文件。我们只用使用npm install --save @types/package
* 如果这上面没有，一些比较冷门的JS包怎么办呢？那就得自己写，自己写可以参考TS官网关于怎么写的说明文档
https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
* 另外我发现一个很好的工具dts-gen，https://github.com/Microsoft/dts-gen根据它的说明，安装好了之后，它会针对目标JS包自生成一个最基本款的.d.ts文件，帮你理清目标JS包的结构，自己在对于这个文件做进一步的细化和修改。这个特别好，但是有时候对于一些特别复杂的JS包，它会抛出异常，目前看是bug了，总之比没有强很多

* [typescript-tutorial](https://github.com/xcatliu/typescript-tutorial/blob/master/introduction/README.md)
# 类型断言
* 类型断言 (Type Assertion)可以用来手动指定一个值的类型<类型>值
*  类型断言的用法如上,在需要断言的变量前加上<Type> 即可。
*  类型断言不是类型转换,断言成一个联合类型中不存在的类型是不允许的
# 声明文件
* 声明文件 当使用第三方库时,我们需要引用它的声明文件
* declare定义的类型只会用于编译时的检查,编译结果中会被删除。
* declare var jQuery:(selector:string)=> any
* 通常我们会把类型声明放到一个单独的文件中,这就是声明文件

```
// jQuery.d.ts  我们约定声明文件以.d.ts为后缀

declare var jQuery:(string)=> any


然后在使用到的文件的开头,用「三斜线指令」表示引用了声明文件

/// <reference path="./jQuery.d.ts">
jQuery('#foo')
```
* 第三方声明文件
# 内置对象
* JavaScript中有很多内置对象,它们可以直接在TypeScript中当做定义好了的类型。
* TypeSctipt核心库的定义文件中定义了所有浏览器环境需要用到的类型,并且是预置在TypeScript中的。当你在使用一些常用的方法的时候,TypeScript实际上已经帮你做了很多类型判断的工作了。
# 用TypeScript写Node.js
* Node.js不是内置对象的一部分,如果想用TypeScript写Node.js,则需要引入第三方库
```
npm install @type/node --save-dev
```