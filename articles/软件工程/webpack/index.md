* [Webpack 4 配置最佳实践](https://juejin.im/post/5b304f1f51882574c72f19b0)

# Webpack 4 之前的 Webpack 最佳实践
* webpack-merge
* webpack.DefinePlugin


```
//  build/webpack.dev.js

plugins:[
 new webpack.DefinePlugin({
  'process.en':require('../config/dev.env.js')
 })
]

// config/dev.env.js

module.exports = {
  NODE_ENV:'development'

 }

// 框架、库的作者,或者是我们的业务代码里,都会有一些根据环境做判断,执行不同的逻辑的代码

if(process.env.NODE_ENV !== 'production'){
 console.log('error!')

}
```

# Code Splitting && Long-term caching

## Code Splitting 一般需要做这些事情
1. 为Vendor单独打包(Vendor指第三方的库或公共的基础组件,因为Vendor的变化比较少,单独打包利于缓存)
2. 为Manifest(Webpack的Runtime代码)单独打包
3. 为不同入口的公共业务代码打包(同理,也是为了缓存和加载速度)
4. 为异步加载的代码打一个公共的包

* Code Splitting 一般是通过配置CommonsChunkPlugin来完成。
```
new webpack.optimize.CommonsChunkPlugin({
 name:'vendor',
 minChunks(module){
 return (
   module.resource&&
   /\.js$/.test(module.resource)&&
   module.resource.indexOf(path.join(__dirname,'../node_modules') ===0)
 )
 },

 new webpack.optimize.CommonsChunkPlugin({
  name:'manifest',
  minChunks:Infinity
 }),
 new webpack.optimize.CommonsChunkPlugin({
 name:'app',
 async:'vendor-async',
 children:true,
 minChunk:3
 })
})

```
* Long-term caching
```
output:{
 path:config.build.assetRoot,
 filename:utils.assetPath('js/[name].[chunkhash].js'),
 chunkFilename:utils.assetsPath('js/[id].[chunkhash].js')
}

```

# Webpack 4 下的最佳实践

1. mode
* 设置了mode之后会把 process.env.NODE_ENV也设置为development或者 production.然后在producetion模式下,会默认开启UglifyJsPlugin等等一对插件。


2. 第三方库build的选择
```
// webpack3
resolve:{
 extensions:[".js",".vue",".json"],
 alias:{
  vue$:"vue/dist/vue.runtime.min.js"
 }
}


// 在 Webpack 4 引入了 mode 之后，对于部分依赖，我们可以不用配置 alias，比如 React。React 的入口文件是这样的：
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}

// 复制代码这样就实现了 0 配置自动选择生产 build。
// 但大部分的第三库并没有做这个入口的环境判断。所以这种情况下我们还是需要手动配置 alias。
```

2. Code Splitting
* optimization.splitChunks默认是不用设置的。如果mode是production 那webpack4就会开启Code Spliting
* 默认webpack4只会对按需加载的代码做分割。如果我们需要配置初始化加载的代码也加入代码分割中,可以设置splitChunk.chunks 为 all


```
optimization:{
 splitChunks:{
  cacheGroups:{
  common:{
   chunks(chunk){
    return chunk.name !=='c'
   },
   name:'common',
   minChunks:2
  }
  }
 }
}
```

3. Long-term caching
* 在生产环境中的webpack配置添加 plugin NamedChunksPlugin

```
// 使用模块名称作为chunkid,替换掉原本的使用递增id来作为chunkid导致的[新增entry模块,其他模块的hash发生抖动,导致客户端长效缓存失效]
config.plugins.push(new webpack.NamedChunksPlugin((chunk) => {
  // 解决异步模块打包的问题
  if (chunk.name) {
    return chunk.name;
  }
  return chunk.modules.map(m => path.relative(m.context, m.request)).join("_");
}));

```