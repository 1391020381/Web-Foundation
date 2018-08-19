* 区别：ES6模块的设计思想是尽量的静态化,使得编译时就能确定模块的依赖关系,以及输入和输出的变量。CommonJS和AMD模块,都只能运行时确定这些东西。比如,CommonJS模块就是对象,输入时必须查找对象属性。

```
// commonJS模块

let {stat,exists,readFile} = require('fs')

// 等同于 
let _fs = require('fs')
let stat = _fs.stat
let exist = _fs.exists
let readFile = _fs.readfile
```
* 上面代码的实质是整体加载fs模块(即加载fs的所有方法),生成一个对象(_fs),然后再从这个对象上面获取3个方法。这种加载称为"运行时加载",因为只有运行时才能得到这个对象,导致完全没办法在编译时做"静态优化"

```
// ES6模块

import {stat,exist,readFile} from 'fs'
```
* 上面代码的实质是从fs模块加载3个办法,其他方法不加载。这种加载称为"编译时加载"或静态加载,即es6可以在编译时完成模块加载,效率要比CommonJS模块的加载方式高。当然,这也导致了没办法引用ES6模块本身,因为它不是对象。
* ES6模块自动采用严格模式,不管你有没有在模块头部加上'use strict'
* ES6模块之中,顶层的this指向undefined,即不应该在顶层代码使用this
* import命令具有提升效果,会提升到整个模块的头部,首先执行。由于import是静态编译执行,所以不能使用表达式和变量,这些只有在运行时才有结果的语法结构。