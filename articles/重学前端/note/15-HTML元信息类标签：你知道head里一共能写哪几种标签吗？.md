* 页面元信息类标签

* 所谓元信息，是指描述自身的信息,元信息类标签,就是HTML用于描述文档自身的一类标签,它们通常出现在head标签中,一般都不会在页面被显示出来(于此相对,其他标签,如语义类标签 描述的是业务)

* 元信息多数情况下是给浏览器、搜索引擎等机器阅读的,有时候这些信息会在页面之外显示给用户,有时候则不会。

## heade 标签
* heade标签本身并不携带任何信息,它主要是作为盛放其它语义类标签的容器使用。
* head标签规定了自身必须是html标签中第一个标签,它的内容必须包含一个title,并且最多只能包含一个base.如果文档作为iframe,或者有其他方式指定了文档标题时,可以允许不包含title标签

## title标签
* title标签表示文档的标题。
* 主要是考虑到 title 作为元信息，可能会被用在浏览器收藏夹、微信推送卡片、微博等各种场景，这时侯往往是上下文缺失的，所以 title 应该是完整地概括整个网页内容的。
* h1 则仅仅用于页面展示，它可以默认具有上下文，并且有链接辅助，所以可以简写，即便无法概括全文，也不会有很大的影响。

## base标签
* base标签实际上是个历史遗留标签。它的作用是给页面上所有的URL相对地址提供一个基础。
* base标签最多只有一个,它改变全局的链接地址,它是一个危险的标签,容易造成跟JavaScript的配合问题,所以实际开发中,我们比较建议你使用JavaScript来代替base标签。

## meta 标签
* meta标签是一组键值对,它是一种通用的元信息表示标签。
* 在head中可以出现任意多个meta标签。一般的meta标签由name 和conent两个属性来定义。
* name表示元信息的名,content则用于表示元信息的值。

#### 具有 charset属性的meta
```
<meta charset="UTF-8">

 ``` 
 * charset 型 meta 标签非常关键，它描述了 HTML 文档自身的编码形式。因此，我建议这个标签放在 head 的第一个。
 * 这样，浏览器读到这个标签之前，处理的所有字符都是 ASCII 字符，众所周知，ASCII 字符是 UTF-8 和绝大多数字符编码的子集，所以，在读到 meta 之前，浏览器把文档理解多数编码格式都不会出错，这样可以最大限度地保证不出现乱码。
 * 一般情况下，http 服务端会通过 http 头来指定正确的编码方式，但是有些特殊的情况如使用 file 协议打开一个 HTML 文件，则没有 http 头，这种时候，charset meta 就非常重要了。

 ### 具有http-equiv属性的meta
 * 具有http-equiv属性的meta标签,表示执行一个命令,这样的meta标签可以不需要name属性了。
 ```
<meta http-equiv="content-type" content="text/html; charset=UTF-8">


 ```
 * 除了 content-type还有以下几种命令
 <ul>
<li>content-language 指定内容的语言；</li>
<li>default-style 指定默认样式表；</li>
<li>refresh 刷新；</li>
<li>set-cookie 模拟 http 头 set-cookie，设置 cookie；</li>
<li>x-ua-compatible 模拟 http 头 x-ua-compatible，声明 ua 兼容性；</li>
<li>content-security-policy 模拟 http 头 content-security-policy，声明内容安全策略。</li>
</ul>

### name 为 viewport 的 meta

```

<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

```

<ul>
<li>width：页面宽度，可以取值具体的数字，也可以是 device-width，表示跟设备宽度相等。</li>
<li>height：页面高度，可以取值具体的数字，也可以是 device-height，表示跟设备高度相等。</li>
<li>initial-scale：初始缩放比例。</li>
<li>minimum-scale：最小缩放比例。</li>
<li>maximum-scale：最大缩放比例。</li>
<li>user-scalable：是否允许用户缩放。</li>
</ul>

### 其它预定义的 meta
* application-name：如果页面是 Web application，用这个标签表示应用名称。
<ul>
<li>author: 页面作者。</li>
<li>description：页面描述，这个属性可能被用于搜索引擎或者其它场合。</li>
<li>generator: 生成页面所使用的工具，主要用于可视化编辑器，如果是手写 HTML 的网页，不需要加这个 meta。</li>
<li>keywords: 页面关键字，对于 SEO 场景非常关键。</li>
<li>referrer: 跳转策略，是一种安全考量。</li>
<li>theme-color: 页面风格颜色，实际并不会影响页面，但是浏览器可能据此调整页面之外的 UI（如窗口边框或者 tab 的颜色）。</li>
</ul>