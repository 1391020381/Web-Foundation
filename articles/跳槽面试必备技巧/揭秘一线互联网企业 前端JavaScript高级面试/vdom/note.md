1. vdom是什么?为何会存在vdom?
2. vdom的如何应用,核心API是什么
* h patch
3. 介绍一下diff算法
* 什么是diff算法
* 去繁就简
* diff算法非常复杂,实现难度很大,源码量很大
* 去繁就简,讲明白核心流程,不关心细节
* 面试官也大部分都清楚细节,但是很关心核心流程。
* 去繁就简之后,依然具有很大挑战性,并不简单。
* vdom为何用diff算法
* DOM操作时 昂贵的,因此尽量减少DOM操作
* 找出本次DOM必须更新的节点来更新,其他的不更新
* 这个找出的过程,就需要diff算法。
* diff算法的实现流程
* patch(container,vnode)
* patch(vnode,newVnode)

* diff是linux的基本命令
* vdom中应用diff算法是为了找出需要更新的节点
* diff实现  patch(container,vnode) patch(vnode,newVnode)
* 核心逻辑 createElement updateChildren


* 用JS模拟DOM结构
* DOM操作非常昂贵
* 将DOM对比操作放在JS层