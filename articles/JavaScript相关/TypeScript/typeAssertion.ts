// 类型断言 Type Assertion 可以手动指定一个值得类型
// <类型>值  值 as 类型

function getLength(something: string | number): number {
    if ((<string>something).length) {
        return ((<string>something).length)
    } else {
        return something.toString().length
    }
}
// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的。