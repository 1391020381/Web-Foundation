# Native与H5交互的两种方式
* 原生和前端的交互有两种方式:url scheme以及JavaScriptCore(在安卓中是 addJavaScriptInterface)
* url scheme适用于所有是通过url拦截实现的,在大量数据传输,以及效率上都有影响, 另一种方法则在底版本中会有这样活那样的问题。如javaScriptCore不支持ios7以下,addJavaScriptInterface在4.2以前有风险漏洞
# url scheme交互
* 一些概念
    * 一般清空下, url scheme是一种类似与url的链接,是为了方便app直接相互调用设计的
    * 具体为,可以用系统的OpenURI打开一个类似与URL的链接(可拼入参数),然后系统会进行判断,如果是系统的url scheme则打开系统应用,否则找看是否有app注册这种sheme,打开对应app
    * 需要注意的是,这种scheme必须原生app注册后才会生效,如微信的scheme为 weixin://
 # 基本原理
 * H5 ->触发一个url(每个功能代表的url都不相同) -> Native 端捕获到url -> Native端分析属于哪一个功能并执行-> Native端调用H5中的方法执行结果回调给H5
 ## 相比较其它方案的优点：
 * Android4.2以下,addJavascriptInterface方式有安全漏掉
 * ios7以下,javascriptCore无法使用。  
 * 如果需要兼容低版本的机型,url scheme方案是不二选择。


![JSBridge](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/articles/hybrid/img/JSBridge_baseprinciple.png)


 # H5直接与Native交互
 * H5调Android原生通过 addJavascriptInterface注册,然后h5直接调用
 * Android调用H5原生loadurl来调用h5,4.4及以上还可以通过 evaluateJavaScript 调用
 * H5调ios原生通过 javascriptCore注册(需ios7以上),然后H5直接调用
 * IOS调用h5通过 stringByEvaluatingJavaScriptFromString