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