1. 说一个原型的实际应用
* jquery和zepto的简单实用
* zepto如何使用原型
* jquery如何使用原型


* 描述一下jquery如何使用原型
* 描述一下zepto如何使用原型
* 再结合自己的项目经验,说一下自己家开发的例子。

2. 原型如何体现它的扩展性
* 插件机制
`
// 因为要扩展插件,做一个简单的插件的例子

$.fn.getNodeName = function (){
    return this[0].nodeName
}
`
* 只有 $ 会暴露在winodw全局变量
* 将插件扩展统一到 $.fn.xxx这个接口,方便使用