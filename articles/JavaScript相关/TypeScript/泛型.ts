function r<T>(args: T): T {
    return args;
}
console.log(r("icepy"))
console.log(r(100))
console.log(r(true))

/**
 *  泛型 会根据我们传入的参数类型而返回一个类型,这也意味着我们可以将它适用于多个类型。
 */