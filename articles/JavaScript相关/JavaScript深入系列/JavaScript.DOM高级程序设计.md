# 本书的约定:
 1. 代码以等宽字体表示。
 2. 新加的或修改过的代码通常会以加粗的等宽子弟表示。
 3. 伪代码和变量输入以斜体等宽字体表示。
 4. 对于需要提醒读者注意的内容,突出排版。
 5. 有时某一行代码可能会超出本书的宽度,这时将使用箭头图标
 6. 为了节省版面，许多例子代码中都会包含'...省略的代码....'
 7. 在要读者按照作者的指示构建例子的情况下,会以一个带注释的结构开头。
# 第一部分 深入理解DOM脚本编程
## 遵循最佳实践
 * 最佳实践是人们做事时应该遵循的、被公认和经历验证的模式。
   1. 不唐突和渐进增强
   2. 把行为从结构中分离出来
   3. 使用严格型DOCTYPE规范,那么锚标签中的target属性是无效的
   4. 不要版本检测，使用能力检测
   5. DOM编程增强行为和交互性。
   6. 为重用命名空间而进行规划。
   ```
   (function(){


       window['myNameSpace'] = {}
   })()
   ```
   7. 通过可重用的对象把事情简化
   8. 大多数Web开发者都选择使用单引号而不是双引号。
   9. 通过使用引号和连接操作符,结果字符串的标签之间不会存在空白。
    
## 创建可重用的对象
```
// 构造函数  

function myConstructor (message){
    this.myMessage = message;

    // 私有属性
    var separator = ''
    var myOwner = this

    // 私有方法
    
    function alertMessage (){
        alert(myOwner.myMessage)
    }

    this.appendToMessage = function(string){
        this.myMessage += separator + string
        alertMessage()
    }
}

// 公有方法

myConstructor.prototype.clearMessage = function(string){
    this.myMessage = ''
}

// 静态属性

myConstructor.name = 'Jeff'

// 静态方法

myConstructor.alertName = function(){
    alert(this.name)
}

```
 * 记住以下几条规则可以保证你对所有成员的身份做适当的界定：
     1. 由于私有变量和特权成员在函数的内部，因此它们会被带到函数的每个实例中(即由构造函数创建的每个实例都会包含同样的私有和特权成员的副本,因而实例越多占用的内存也就越多)。
     2. 公有的原型成员是对象蓝图的一部分,适用于通过new关键字实例化的该对象的每个实例
     3. 静态成员只适用于对象的一个特殊实例(就是作为Function对象实例的构造函数本身)。
  * 定义对象时,最后一项的结尾放了一个逗号,那么最后一个项的值会变成null
  * this
  * 通过call和apply()重新定义执行环境
     1. functionReference.call(object,argument1,argument2) 
     2. functionReference.apply(object,[argument1,argument2])
     3, function bindFunction(obj,func){
         return function(){
             func.apply(obj,arguments)
         }
     }
   * try {}、catch{}和异常处理
      1. 自定义JavaScript日志对象<将原生的调试信息,输出到自己的日志窗口中>  
## DOM2核心和DOM2 HTML
  * DOM是一组用来描述脚本怎样与结构化文档进行交互和访问的web标准。DOM定义了一系类列对象、方法和属性,用于访问、操作和创建文档中的内容、结构、样式以及行为。
  * DOM1 和DOM2 及DOM3
     1. 在Web浏览器中, DOMImplementation 对象被实例化为 document.implementation.hasFeature()
     2. 当在迭代每个节点childNodes时需要记住文本节点
     3. 在浏览器解析完某个网页文档后,每个节点并非就是一个简单的Element对象的实例,而是继承了很多东西的Element底线的扩展。
     4. 取决于文档的标记、nodeName以及适合于该特定标签的DOMHTML规范,每项都将继承一组特定的属性和方法。事实上Element对象自身就继承了Node对象的所有属性和方法。例如具体的<a>锚元素而言,该标签是一个DOM2 HTML规范中的HTMLAnchorElement对象,该对象有扩展自其它一些对象。
     5. 核心Node对象
        * 节点名称、值和类型
        * 父节点、子节点和同辈节点
        * childNodes<NodeList对象>  parentNode  
        * previousSibling和nextSibling
        * 节点属性
        * 节点的ownerDocument属性<一个节点的ownerDocument属性类似于指向节点所属根文档的引用。大多数情况下,都可以通过它在作用域链中的引用document>
        * hasChildNodes()和hasAttributes()
        * appendChild和insertBefore
        * replaceChild和removeChild
        * document.getElementById()方法取得的是一个节点的引用,而非节点的副本。
     6. 核心Element对象   
        1. 操作Element对象的属性
           * getAttribute(name)
           * setAttribute(name,value)
           * removeAttribute(name)
     7. 核心Document对象
        1. document.docuemntElement属性  
        2. 遍历和迭代DOM树
        ```
    function walkTheDOMRecursive(func,node,depth,returnedFromParent){
        var root = node || window.document
        var returnedFromParent = func.call(rot,depth++,returnedFromParent)
        var node = root.firstChild
        while(node){
            walkTheDOMRecursive(func,node,depth,returnedFromParent)
            node = node.nextSibling
        }
    }

        ``` 
   8.  DOM2 HTML的HMTLDocument对象
       * title
       * referrer包含链接到当前页面的前一个页面的URL
       * domain包含当前站点的域名
       * links是一个包含与当前文档中所有<link>标签对应的DOM节点的数组集合    
## 响应用户操作和事件
## 动态修改样式和层叠样式表
## 案例研究:图像裁剪和缩放工具
# 第二部分 浏览器外部通信
## 向应用程序中加入Ajax
## 案例研究：实现带进度条的异步文件上传功能
# 第三部分 部分高级脚本编程资源
## 通过库来提高生产力
## 添加效果增强用户体验
## 丰富的Mashup! 运用API添加地图、搜索及更多功能
## 案例研究：用DOM设计选择列表 