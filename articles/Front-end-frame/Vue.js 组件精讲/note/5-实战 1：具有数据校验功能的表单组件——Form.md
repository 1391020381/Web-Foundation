- 注意，Vue.js 的组件渲染顺序是由内而外的,所以 FromItem 要先于 Form 渲染,在 FormItem 的 mounted 触发时,我们向 Form 派发了事件
  on-form-item-add ,并将当前 FormItem 的实例 this 传递给 Form,而此时,Form 的 mounted 尚未触发,因为 Form 在最外层,如果在 Form 的 mounted 里监听事件,是不可以的,所以要在其 created 内监听自定义事件,Form 的 created 要先于 FormItem 的 mounted。

* Vue.js 的组件渲染顺序是由内而外
* Vue.js 的 API 只来自 prop event slot 这三个部分,但是一些场景下,需要通过 ref 来访问这个组件,调用它的一些内置方法。比如上面的 validate 和 resetFields 方法,就需要使用者主动来调用.

# 自定义组件的 v-model

- [在组件上使用 v-model](https://cn.vuejs.org/v2/guide/components.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model)

* [自定义组件的 v-model](https://cn.vuejs.org/v2/guide/components.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model)
* 一个组件上的 v-model 默认会利用名为 value 的 prop 和 名为 input 的事件,但是像单选框、复选框等类型的输入控件可能会将 value 特性用于 不同的目的。 model 选项可以用来避免这样的冲突。
