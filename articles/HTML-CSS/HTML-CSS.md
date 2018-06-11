 # 失效的时候注意BFC
 # margin
 * 非替代(non-replaced)行内元素可以使用该属性设置 左、右 两边的外边距;若要设置上、下的外边距,必须先使该元素表现为 块级 或 行内块级。
 * 外延边距始终透明。
 # padding   
 * 非替代(non-Replaced)行内元素可以使用该属性设置左、右两边的内补丁；若要设置上、下两边的内补丁，必须先使该对象表现为块级或内联块级。

 # [块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
* 块格式化上下文(Block Formatting Context ,BFC)是Web页面的可视化CSS渲染的一部分,是布局过程中生成块级盒子的区域,也是浮动元素与其他元素的交互限定区域。
* 下列方式会创建块格式化上下文:
    * 根元素或包含根元素的元素
    * 浮动元素(元素的float不是 none)
    * 绝对定位元素(元素的postition为absolute或fixed)
    * 行内块元素(元素的display为inline-blck)
    * 表格单元格(元素的display为table-cell，html表格单元默认为该值)
    * overflow值不为visible的块元素
    * 弹性元素(display 为flex或inline-flex元素的直接子元素)
* BFC的运用
1. 清除浮动
2. 边距合并
3. 