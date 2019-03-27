* 换句话说,常规的组件使用方式,只能在规定的地方渲染组件,这在一些特殊场景下就比较局限了,例如：
1. 组件的模板是通过调用接口从服务端获取的,需要动态渲染组件
2. 实现类似原生 window.alert()的提示框组件,它的位置是在 <body>下,而非<div id="app"></div>,并且不会通过常规的组件自定义标签的形式使用,而是像JS调用函数一样使用。
3. 创建一个Vue实例时,都会有一个选项el,来指定实例的根节点,如果不写el选项,那组件就处于未挂载状态。Vue.extend的作用,就是基于Vue构造器,创建一个"子类",它的参数跟 new Vue的基本一样,但是 data要跟组件一样,是个函数,再配合$mount,就可以让组件渲染,并且挂载到任意指定的节点上,比如body


```
improt Vue from 'vue'
import Notification from './notification.vue'
const props = {}
const Instance = new Vue({
  render(h){
    return h(Notification,{
      props:props
    })
  }
})

const component = Instance.$mount()
document.body.appendChild(component.$el)
```