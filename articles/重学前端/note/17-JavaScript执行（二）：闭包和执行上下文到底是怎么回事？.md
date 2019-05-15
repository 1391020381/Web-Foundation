<p>我们今天要讲的知识在网上有不同的名字，比较常见的可能有：</p>
<ul>
<li>闭包；</li>
<li>作用域链；</li>
<li>执行上下文；</li>
<li>this 值。</li>
</ul>
<p>实际上，尽管它们是表示不同的意思的术语，所指向的几乎是同一部分知识，那就是函数执行过程相关的知识。我们可以简单看一下图。</p>

* ![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/%E9%87%8D%E5%AD%A6%E5%89%8D%E7%AB%AF/img/%E8%AF%8D%E6%B3%95%E4%BD%9C%E7%94%A8%E5%9F%9F.png)

## 闭包
* 我们可以这样简单理解一下,闭包其实只是一个绑定了执行环节的函数,这个函数并不是印在书本里的一条简单的表达式,闭包与普通函数的区别是,它携带了执行的环境,就像人在外星中需要自带吸氧的装备一样,``` 这个函数也带有在程序中生存的环境 ```

<p>当我们把视角放在 JavaScript 的标准中，我们发现，标准中并没有出现过 closure 这个术语，但是，我们却不难根据古典定义，在 JavaScript 中找到对应的闭包组成部分。</p>

<ul>
<li>环境部分
<ul>
<li>环境：函数的词法环境（执行上下文的一部分）</li>
<li>标识符列表：函数中用到的未声明的变量</li>
</ul>
</li>
<li>表达式部分：函数体</li>
</ul>


## 执行上下文：执行的基础设施
* JavaScript标准把一段代码(包括函数),执行所需的所有信息定义为:"执行上下文"

### 执行上下文在ES3中,包含三个部分。
* scope:作用域,也常常被叫做作用域链
* variable object:变量对象,用于储存变量的对象
* this value : this 值

### 在ES5中,我们改进了命名方式,把执行上下文最初的三个部分改为下面这个样子。
* lexical environment: 词法环境,当获取变量时使用
* variable evvironment： 变量对象,当声明变量时使用
* this value: this 值

### 在ES2018中,执行上下文又变成了这个样子,this值被归入 lexical environment
  
<ul>
<li>lexical environment：词法环境，当获取变量或者 this 值时使用。</li>
<li>variable environment：变量环境，当声明变量时使用</li>
<li>code evaluation state：用于恢复代码执行位置。</li>
<li>Function：执行的任务是函数时使用，表示正在被执行的函数。</li>
<li>ScriptOrModule：执行的任务是脚本或者模块时使用，表示正在被执行的代码。</li>
<li>Realm：使用的基础库和内置对象实例。</li>
<li>Generator：仅生成器上下文有这个属性，表示当前生成器。</li>
</ul>

* 我们在这里介绍执行上下文的各个版本定义，是考虑到你可能会从各种网上的文章中接触这些概念，如果不把它们理清楚，我们就很难分辨对错。``` 如果是我们自己使用，我建议统一使用最新的 ES2018 中规定的术语定义。```

<p>尽管我们介绍了这些定义，但我并不打算按照 JavaScript 标准的思路，从实现的角度去介绍函数的执行过程，这是不容易被理解的。</p>

<p>我想试着从代码实例出发，跟你一起推导函数执行过程中需要哪些信息，它们又对应着执行上下文中的哪些部分。</p>

### let
<p>我简单统计了下，以下语句会产生 let 使用的作用域：</p>
<ul>
<li>for；</li>
<li>if；</li>
<li>switch；</li>
<li>try/catch/finally。</li>
</ul>

* Realm

 <p>在 ES2016 之前的版本中，标准中甚少提及{}的原型问题。但在实际的前端开发中，通过 iframe 等方式创建多 window 环境并非罕见的操作，所以，这才促成了新概念 Realm 的引入。</p>
 <p>Realm 中包含一组完整的内置对象，而且是复制关系。</p>
 <p>对不同 Realm 中的对象操作，会有一些需要格外注意的问题，比如 instanceOf 几乎是失效的。</p>

 ```

var iframe = document.createElement('iframe')
document.documentElement.appendChild(iframe)
iframe.src="javascript:var b = {};"

var b1 = iframe.contentWindow.b;
var b2 = {};

console.log(typeof b1, typeof b2); //object object

console.log(b1 instanceof Object, b2 instanceof Object); //false true



 ```