- [掘金小册《Vue.js 组件精讲》示例源码](https://github.com/icarusion/vue-component-book)
- [基于vue-cli3构建组件库](https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93)


# Style
* 参考BEM命名规范进行的魔改自定义
* 外层:最外层为组件块(Block) 命名规范为(组件名),例如button(一般一到两个单词,利用-链接)
* 子元素：利用__符号连接,例如table组件存在head以及body,则表示为table_head,以及tabel__body,如果依次往下还存在着子元素,则利用上层元素的来命名body_head;
* 状态: 利用 vue 动态 class 结合 sass
```
:class="['table',{'is-stripe':stripe}]"

.table{
  &.is-stripe{
    .table__body{
      
    }
  }
}


```

# SVG 
* 跨SVG调用 SVG中的use元素可以调用其他SVG文件的元素,只要在一个文档中。

```
<svg width="500" height="110"> 
<use xlink:href="#shape" x="50" y="50"> 
</svg>

```
* 首先,注意到没有,use元素是通过 xlink:href属性,寻找要使用的元素的。 #shape对应的就是 id 为 shape的元素。 use元素可以有自己的坐标,以及支持 transform 变换,甚至可以用 use 其他use元素。
