// 在面向对象语言中,接口(interfaces)是一个重要的概念,它是对行为的抽象,而具体如何行动需要由类(class)出实现(implements)

interface Person {
    readonly id: number;
    name: string;
    age: number;
    sex?: string  // 有时候我们希望不要完全配置一个形状,那么可以用可选属性。
    [propName: string]: any;   // 有时候我们希望一个接口允许有任意的属性   定义了任意属性取 string类型的值。
};
let tom: Person = {  // 赋值的时候,变量的形状必须和接口的形状保持一致。
    id: 27,
    name: 'Tom',
    age: 25,
    gender: 'male'
}
// 使用 readonly定义的属性id初始化后,又被赋值了,所以会报错。
// 注意,只读的约束在于第一次给对象赋值的时候,而不是第一次给只读属性赋值的时候
// tom.id = 33  