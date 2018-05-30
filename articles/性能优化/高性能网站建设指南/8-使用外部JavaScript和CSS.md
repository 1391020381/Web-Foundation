* 通常使用外部文件更好。
* JavaScript和CSS文件有会被浏览器缓存起来。HTML文档——至少是那些包含动态内容的HTML文档——通常不会被配置为可以进行缓存。当遇到
这种情况时(HTML文档没有缓存),每次请求HTML文档都要下载内联的JavaScript和CSS。另一方面,如果JavaScript和CSS是外部文件,浏览器就能
缓存它们,HTML文件的大小减少,而且不会增加HTTP请求的数量。
* 关键因素是,与HTML文档请求数量相关的、外部JavaScript和CSS组件被缓存的评率。