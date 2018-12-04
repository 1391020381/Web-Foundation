1. 如何理解MVVM
2. 如何实现MVVM
3. 是否解读过vue源码


1. 说一下使用jQuery和使用框架的区别
* 数据和视图的分离 解耦(开放封闭原则)
* 以数据驱动视图 只关注数据变化,DOM操作被封装
2. 说一下对MVVM的理解
* MVC
* MVVM
* 关于 viewmodle view通过dom listeners来改变Model   model通过 Data Bindings来改变 view
* Model  View  ViewModel


3. vue的三要素
* 响应式： vue如何监听到data的每个属性的变化
* 模板引擎: vue的模板如何被解析,指令如何处理
* 渲染：vue的模板如何被渲染成html?以及如何渲染过程
4. vue中如何实现响应式
* Object.defineProperty
* 将data的属性代理到vm上   
*  对vm的每个属性使用Object.defineProperty,并返回 data[key] 并设置data[key]
5. vue中如何解析模板
6. vue的整个实现流程