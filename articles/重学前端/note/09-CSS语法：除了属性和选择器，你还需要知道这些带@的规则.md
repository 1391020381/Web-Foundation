* ``` CSS的顶层样式由两种规则组成,一种被称为 at-rul,也就是at规则,另一种是qualified rule,也就是普通规则。  ```
* at-rule由一个 @关键字和后续的一个区块组成,如果没有区块,则以分号结束。
* at规则正是掌握CSS的一些高级特性所必须的内容。
* qualified rule则是指普通的CSS规则,也是我们熟知的,由选择器和属性指定构成的规则。

# at规则

## @charset
* @charset用于提示 css文件使用的字符编码方式。它如果被使用,必须出现在最前面。
* 这个规则只在给出语法解析阶段前使用,并不影响页面上的展示效果。
* @charset "utf-8"
## import
* @import用于引入一个css文件,除了@charset规则不会被引入,@import可以引入另一个文件的全部内容。

```
@import "mystyle.css"
@import url("mystyle.css")

@import [ <url> | <string> ]
        [ supports( [ <supports-condition> | <declaration> ] ) ]?
        <media-query-list>? ;

```
## media
* media就是 media query使用规则,它能够对设备的类型进行一些判断。在media的区块内,是普通规则的列表。
```
@media print {
  body {
    font-size:10pt;
  }
}

```

## page
* page 用于分页媒体访问网页时的表现设置,页面是一种特殊的盒模型结构。除了页面本身,还可以设置它周围的盒。

```
@page{
  size:8.5in 11in;
  margin:10%;
  @top-left{
    content:"Hamlet"
  }
  @top-right {
    content: "Page" counter(page)
  }
}

```

## counter-syle
* counter-style 产生一种数据,用于定义列表的表现。
```
@counter-style triangle {
  system: cyclic;
  symbols: ‣;
  suffix: " ";
}

```

## key-frames
* keyframes 产生一种数据 用于定义动画关键帧。

```
@keyframes diagonal-slide {

  from {
    left: 0;
    top: 0;
  }

  to {
    left: 100px;
    top: 100px;
  }

}


```
## fontface
* fontface用于定义一种字体,icon font技术就是利用整个特性来实现的。

```

@font-face{
  font-family:Gentium;
  src:url(http://example.com/fonts/Gentium.woff);
}
p {
  font-family:Gentium,serif;
}

```

## support
* support检查环境的特性,它与 media比较类似。
## namespace
* 用于跟xmL命名空间配合的一个规则,表示内部的css选择器全都带上特定命名空间。

## viewport
* 用于设置视口的一些特性,不过兼容性目前不是很好,多数时候被html的meta代替。

## 其他
* 除了以上这些,还有些目前不太推荐使用的at规则。
<ul>
<li>@color-profile 是 SVG1.0 引入的 CSS 特性，但是实现状况不怎么好。</li>
<li>@document 还没讨论清楚，被推迟到了 CSS4 中。</li>
<li>@font-feature-values 。todo 查一下。</li>
</ul>

# 普通规则
* qualified rule 主要是由选择器和声明区块构成。声明区块又由属性和值构成。
<ul>
<li>普通规则
<ul>
<li>选择器</li>
<li>声明列表
<ul>
<li>属性</li>
<li>值
<ul>
<li>值的类型</li>
<li>函数</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>

## 选择器
* 从语法的角度介绍选择器