# h 有3个参数，分别是:
1. 要渲染的元素 或 组件,可以是一个 html标签、 组件选项 或 一个函数(不常用),该参数为必填项。
```
h('div')
import DatePicker from '../component/date-picker.vue'
h(DatePicker)

```
2. 对应属性的数据对象,比如组件的 props 元素的 class 绑定的事件, slot  自定义指令
3. 子节点,可选 String 或 Array


```
// render.js

export default {
  functional:true,
  props:{
    render:Function
  },
  render:(h,ctx)=>{
    return ctx.props.render(h)
  }
}

// my-component.vue

<template>
<div>
  <Render :render="render"></Render>
</div>
</template>
import Render form './render.js'
export default {
  components:{Render},
  props:{
    render:Function
  }
}
```