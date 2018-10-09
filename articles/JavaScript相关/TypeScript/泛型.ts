function r<T>(args: T): T {
    return args;
}
console.log(r("icepy"))
console.log(r(100))
console.log(r(true))

/**
 *  泛型 会根据我们传入的参数类型而返回一个类型,这也意味着我们可以将它适用于多个类型。
 */

function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result
}
console.log(createArray<string>(3, 'x'))  // 接着在调用的时候，可以指定它具体的类型为 string。当然，也可以不手动指定，而让类型推论自动推算出来：
console.log(createArray(3, 'x'))

// 多个类型参数 定义泛型的时候,可以一次定义多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
console.log(swap([7, 'sevent']))

// 泛型约束
// 在函数内部使用泛型变量的时候,由于事先不知道它是哪种类型,所以不能随意的操作它的属性或方法

interface Lengthwise {
    length: number
}
function loggingIdentity<T extends Lengthwise>(arg: T) {
    console.log(arg.length)
    return arg;
}
// loggingIdentity(7)

// 泛型接口

interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
}

let mySumFun: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

// 使用可以含有泛型的接口来定义函数的形状

interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>
};
let createArrayFunc: CreateArrayFunc;
createArrayFunc = function <T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}