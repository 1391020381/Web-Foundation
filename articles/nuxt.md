# nuxt官网examples
 1. async-component-injection
     ![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/img/nuxt-async-component-injection.png)
 2. async-data
 3. auth-routes
 4. cached-components 
 5. custom-layouts
     * 在layouts文件夹下定义布局 注意要使用 <nuxt/>
     * 在要使用这个布局的组件中使用 layout:'dark<布局名称>' 
 6. custom-loading 
     * 首先自定义 loading组件
     * 在 nuxt.config.js设置 loading:'~/components/loading.vue'  
 7. custom-server
     *根目录 server.js  
     ```
     const app = require('express')()
     const { Nuxt, Builder } = require('nuxt')
     
     const host = process.env.HOST || '127.0.0.1'
     const port = process.env.PORT || 3000
     
     // Import and set Nuxt.js options
     let config = require('./nuxt.config.js')
     config.dev = !(process.env.NODE_ENV === 'production')
     
     const nuxt = new Nuxt(config)
     
     // Start build process in dev mode
     if (config.dev) {
       const builder = new Builder(nuxt)
       builder.build()
     }
     
     // Give nuxt middleware to express
     app.use(nuxt.render)
     
     // Start express server
     app.listen(port, host)
     ```
  8. [dynamic-components](https://github.com/nuxt/nuxt.js/tree/dev/examples/dynamic-components) 
  9. [dynamic-layouts](https://github.com/nuxt/nuxt.js/tree/dev/examples/layout-transitions)
      * 在middleware书写中间件,当作在组件中引入某个布局的判断条件 
      * 在 nuxt.config.js {router:middleware:['mobile']}
      * layout: ({ isMobile }) => isMobile ? 'mobile' : 'default'  
      *  transition: 'bounce' 
  10. layout-transitions
      *   参考官网实例<users-2.vue> 
      *   使用vue的 <transition></transition>
      *  wacth $route.query.page
      * this.$nuxt.$loading.start()    getData   this.$nuxt.$loading.finish() 
  11. markdownit
      * 使用  md-it.js插件
  12. meta-info
     * 在组件中 head对象自定义 meta  
  13.  nested-components
      * 使用了 slot 
  14.  no-ssr
      * <no-ssr></no-ssr>  组件和其内部都只在 client端渲染  
  15.  plugins-vendor
       * nuxt.config.js
        ```
        module.exports = {
          build: {
            vendor: ['axios', 'mini-toastr', 'vue-notifications']
          },
          plugins: [
            // ssr: false to only include it on client-side
            { src: '~/plugins/vue-notifications.js', ssr: false }
          ]
        } 
        ``` 
  16. scroll-behavior
       *  scrollToTop: true
  17. static-images
        * ```<img src="~static/nuxt-black.png" />```    
        * ```<img src="~static/nuxt.png" />```
  18.  style-resources
        * 可以在组件的 style上添加 lang ="less"  lang="scss"不同的组件可以不同
        *  公用的css资源设置
        ```
        module.exports = {
          build: {
            // You cannot use ~/ or @/ here since it's a Webpack plugin
            styleResources: {
              scss: './assets/variables.scss',
              less: './assets/*.less'
            }
          }
        }
        
        ```                        