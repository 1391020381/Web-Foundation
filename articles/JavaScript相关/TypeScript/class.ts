// class Animal{
//     private name;
//     public constructor(name){
//         this.name = name;
//     }
// }

// let a = new Animal('Jack');
// console.log(a)
// class Cat extends Animal{
// constructor(name){
//     super(name);
// }
// }

abstract class Animal{
    public name:string;
    public constructor(name:string){
        this.name = name;
    }
    public abstract sayHi():string;
}
// let a = new Animal('Jack')

class Cat extends Animal{
    public sayHi(){
        console.log(`Meow,My name is ${this.name}`)
        return `Meow,My name is ${this.name}`
    }
}

let cat = new Cat('Tom')
console.log(cat)

interface Alarm {
    alert();
}
interface Light{
    lightOn();
    lightOff()
}

interface LighttableAlarm extends Alarm{
    lighton();
    linghtOff();
}
class Door{

}
class SecurityDoor extends Door implements Alarm{ // 继承  实现
    alert(){
        console.log('SecurityDoor alert')
    }
}
class Car implements Alarm,Light{  // 实现多个接口
    alert(){
        console.log('Car alert')
    }
    lightOn(){
        console.log('Car light on')
    }
    lightOff(){
        console.log('Car light off')
    }
}

class Ponint{
    x:number;
    y:number
}

interface Ponint3d extends Ponint{
    z:number
}
let point3d:Ponint3d = {x:1,y:2,z:3}

interface SearchFunc{
    (source:string,subString:string):boolean;
}
let mySearch:SearchFunc;
mySearch = function(source:string,subString:string){
    return source.search(subString)!==-1
}

function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}