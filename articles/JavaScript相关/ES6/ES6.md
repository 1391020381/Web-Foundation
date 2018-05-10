  # class
   1. 基本结构
   ```
   class Point {    // 无私有的方法和属性
     static classMethod(){}
     constructor(x,y){  // 实例属性
         this.x = x
         this.y = y
     }  
     toString(){  // 原型上的方法    原型的构造函数指向 constructor   注意  构造函数  原型  实例 三者的关系
     }
     get prop (){
     
     }
     set prop (value){
     
     }
   }
   class ColorPoint  extends Point {  // 通过  extends 继承
    constructor(...args) {
       super(...args);
     }
   }
   ```
   
   # decorator  修饰器
    * 修饰器是一个对类进行处理的函数。修饰器函数的第一个参数，就是所要修饰的目标类