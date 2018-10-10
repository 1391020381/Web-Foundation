// 一个函数有输入和输出,要在TypeScript中对其进行约束,需要把输入和输出都考虑到,其中函数声明的类型定义简单：
function sum(x: number, y: number): number {
    return x + y;
}
// 输入多余(或者少于要求的)参数，是不被允许的

// 函数表达式 
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}
// 在TypeScript的类型定义中, => 用来表示函数的定义,左边是输入类型,需要用括号括起来,右边是是输出类型。

interface LabelledValue {
    label: string
}
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}
let myObj = {
    size: 10,
    label: "size 10"
}
printLabel(myObj)

// 函数类型  

// 接口能够描述JavaScript中对象拥有的各种各样的外形。除了描述带有属性的普通对象外,接口也可以描述函数类型
// 为了使用接口表示函数类型,我们需要给接口定义一个调用签名。它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

interface SearchFuno {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFuno;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
let mySearch_1 = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}

// 类类型
// 实现接口 TypeScript也能够用它来明确的强制一个类出符合某种契约。

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}
class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// 重载
// 重载允许一个函数接受不同数量或类型的参数时,作出不同的处理。

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join());
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('')
    }
}
reverse('justdoit')