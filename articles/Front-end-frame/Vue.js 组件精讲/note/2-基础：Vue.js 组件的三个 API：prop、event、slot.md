1. vue.js 内置的通信手段一般有两种:

- ref
- $parent / $children 访问父 / 子实例

* $parent 和 $children 类似,也是基于当前上下文访问父组件或全部子组件的。 无法在跨级或兄弟间 通信

* 基于 Vue.js 开发独立组件,并不是新奇的挑战,它本质上还是 JavaScript。computed mixinx 把状态数据的维护交给 Vue.js 处理,我们只专注在交互上。

* Vue.js 组件开发,玩到最后还是在拼 JavaScript 功底。对于每一位使用 Vue.js 的开发则来说,阅读完本小册都可以尝试开发和维护一套属于自己的组件库,并乐在其中,而且你会越发觉得,一个组件或一套组件库,就是融合了前端精髓的产出。
