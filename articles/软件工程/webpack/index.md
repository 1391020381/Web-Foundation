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