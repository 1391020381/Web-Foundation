- provide /inject API 主要解决了跨级组件间的通信问题,不过它的使用场景,主要是子组件获取上级组件的状态,跨级组件间建立了一种主动提供与依赖注入的关系。然后有两种场景它不能很好的解决:
- 父组件向子组件(支持跨级)传递数据
- 子组件向父组件(支持跨级)传递数据

# $on 与 $emit

- 在父组件 parent.vue 中绑定的自定义事件 test 的处理句柄,然而事件 test 并不是在父组件上触发的,而是在子组件 child.vue 里触发，只是通过 v-on 在父组件中监听。`既然是子组件自己触发的,那它自己也可以监听到,这就要使用$on来监听实例上的事件,换言之,组件使用 $emit 在自己实例上触发事件,并用 $on 监听它`。

* 因为 handleEmitEvent 是当前组件内的 button 调用的,如果这个方法不是它自己调用,而是其它组件调用,那这个方法就大有可为了。

# Vue.js 1.x 的 $dispatch 与 $broadcast

- $dispatch 用于向上级派发事件,只要是它的父级(一级或多级以上),都可以在组件内通过 $on 监听到

* \$broadcast 由上级向下级广播事件的。

# 自行实现 dispatch 和 broadcast 方法

- 在子组件调用 dispatch 方法,向上级指定的组件实例(最近的)上触发自定义事件,并传递数据,且该上级组件已预先通过\$on 监听了这个事件。

* 相反,在父组件调用 broadcast 方法,向下级指定的组件实例(最近的)上触发自定义事件,并传递数据,且该下级组件已预先通过\$on 监听了这个事件。
* 在寻找组件实例上,我们的惯用伎俩就是通过遍历来匹配组件的 name 选项,在独立组件库里,每个组件的 name 值应当是唯一的,name 主要用于递归
