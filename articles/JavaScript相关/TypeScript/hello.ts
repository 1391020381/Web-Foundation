function sayHello(person:string){
    return 'Hello,' + person;
}
let user = 'Tom';
console.log(sayHello(user))
let isDone:boolean = false
function getLength(something:string| number):number{
    if((<string>something).length){
        return (<string>something).length
    }else {
        return something.toString().length
    }
}
// 类型断言的用法如上,在需要断言的变量前加上<Type> 即可。
// 类型断言不是类型转换,断言成一个联合类型中不存在的类型是不允许的

let b:Boolean = new Boolean(1);
let e:Error = new Error('Error occurred');
let d:Date = new Date()
let r: RegExp = /[a-z]/
let body:HTMLElement = document.body
let allDiv:NodeList = document.querySelectorAll('div')
document.addEventListener('click',function(e:MouseEvent){
    console.log(e)
})

type Name = string;
type NameResolver = ()=> string;
type NameOrResolver = Name | NameResolver;
function getName(n:NameOrResolver):Name{
    if(typeof n === 'string'){
        return n;
    }else{
        return n();
    }
}

type EventNames = 'click'  | 'scroll' | 'mousemove';
function handleEvent(ele:Element,event:EventNames){

}
handleEvent(document.getElementById('hello'),'scroll')
handleEvent(document.getElementById('world'),'click')

let xcatliu:[string,number] = ['Xcat Liu',25];

class Animal {
    public name;
    public constructor(name){
   this.name = name;
    }
}

let a = new Animal('Jack');
console.log(a.name);
a.name = 'Tom';
console.log(a.name);