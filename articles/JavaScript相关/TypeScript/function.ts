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