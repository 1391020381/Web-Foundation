[冴羽的博客](https://github.com/mqyqingfeng/Blog)
* 每个函数都有一个prototype(原型)属性,这个属性是一个指针,指向一个对象,而这个对象的用途是包含可以有特定类型的所有实例共享的属性和方法。如果按照字面意思来理解,那么prototype就是通过调用构造函数而创建的那个对象实例的原型对象。
* 每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象,这个对象就是我们所说的原型,每个对象都会从原型'继承'属性。
* 每一个JavaScript对象(除了null)都具有一个属性,叫__proto__,这个属性会指向该对象的原型。
* 构造函数的prototype原型属性(指针),指向原型对象,原型对象的 constructor指向构造函数,  构造函数的实例的[[Prototype]] __proto__指向构造函数的原型

![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/img/prototype2.png)

* 原型也是一个对象,既然是对象,我们就可以用最原始的方式创建它,那就是
```
 var obj = new Object()
 obj.name = 'Kevin'
```
![](https://raw.githubusercontent.com/1391020381/Web-Foundation/master/img/prototype5.png)





* Object.defineProperty(person,'name',{writable:false,value:'justdoit'})
* 一旦把属性定义为不可配置的,就不能再把它变回可配置了。可以多次调用Object.defineProperty方法修改同一个属性,但在把configurable特性设置为false之后就会有限制了。
```
var book = {
  _year:2004,
  edition:1
   }

    Object.defineProperty(book,'year',{
    get:function(){

       return this._year
      },
    set:function(newValue){
       if(newValue > 2004){
          this.year = newValue
          this.edition += newValue -2004
       }
    }
    })

    Object.defineProperties(book,{
    _year:{
       value:1
    },
    edition:{
      value:1
    },
    year:{
      get:function(){},
      set:function(newValue){}
    }
    })
```