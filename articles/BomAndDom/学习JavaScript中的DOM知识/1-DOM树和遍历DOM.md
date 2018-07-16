## DOM树
* HTML的标签被称为元素(element)节点(或只是元素)。嵌套标签成为一个子元素。因此,对于一个HTML文档而言,<html>是一个根节点,然后<head>和<body>是<html>的子元素
* 元素内的文本被称这文本节点，标记为#text。文本节点仅包含一个字符串。它可能没有子元素，也就是说它永远只是树的叶子（没有成为树枝的可能）。
* 除此之外，要注意文本节点中的两个特殊字符：

换行符：↵（对应JavaScript中的\n）
空白符：␣
## DOM中的技术定义
## 其他节点类型
* HTML中的一切，甚至是注释，都将成为DOM的一部分。
## DOM中的空白符

## DOM的遍历
* 父母（Parents）、兄弟姐妹（Siblings）和子元素（Children）著作权归作者所有。

## 总结
* hasChildNodes()可以用来判断某个元素是否包含子节点著作权归作者所有。
* children元素节点的子元素
* firstElementChild、 lastElementChild:元素的第一个或最后一个子元素
* previousElementSibling和nextElementSibling：元素的前一个或后一个相邻元素
* parentElement：元素的父元素

* 向上获取，比如parentNode、parentElement和closest；
* 向下获取，比如querySelector()、querySelectorAll()、children、firstChildren、lastChildren和childNodes
* 兄弟元素（节点），比如nextElementSibling、previousElementSibling、nextSibling和previousSibling

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/BomAndDom/img/dom-tree-19.png)


* 兄弟姐妹和父母打交道
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/BomAndDom/img/dom-tree-20.png)

* 子元素打交道
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/BomAndDom/img/dom-tree-21.png)
