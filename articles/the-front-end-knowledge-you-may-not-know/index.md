* [the-front-end-knowledge-you-may-not-know](https://github.com/justjavac/the-front-end-knowledge-you-may-not-know/issues)
## 清空 input[type='file'] 的值
```
let resetFileDom  = dom =>{
   if(({}).toString.call(dom)!=='[object HTMLInputElement]'){
     throw new Error('必须传入DOM节点')
     }
   dom.value = ''
   dom.type = 'text'
   dom.type = 'file'
 }
```