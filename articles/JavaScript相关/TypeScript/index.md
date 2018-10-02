* Ts(TypeScipt)区别于JS一个最大的不同是TS增加了类型。当一些TS代码要使用JS包的时候,最好这些JS包都有类型介绍,比如这个变量是什么类型,返回什么类型参数等等,这个Type Declaration File有点像是C++ 文件,定义了JS包的接口信息,这个文件的后缀是.d.ts。
* 在npm包管理中,有一类@type/package的包,就是别人已经写好了的对应package的.d.ts文件。我们只用使用npm install --save @types/package
* 如果这上面没有，一些比较冷门的JS包怎么办呢？那就得自己写，自己写可以参考TS官网关于怎么写的说明文档
https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
* 另外我发现一个很好的工具dts-gen，https://github.com/Microsoft/dts-gen根据它的说明，安装好了之后，它会针对目标JS包自生成一个最基本款的.d.ts文件，帮你理清目标JS包的结构，自己在对于这个文件做进一步的细化和修改。这个特别好，但是有时候对于一些特别复杂的JS包，它会抛出异常，目前看是bug了，总之比没有强很多