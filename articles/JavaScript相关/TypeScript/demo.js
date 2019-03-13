var tom = {
    name: 'Tom',
    age: 25,
    gender: 'male',
    ssssss: 'wrwrwe'
};
function sum(x, y) {
    return x + y;
}
sum(1, 2);
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 需要注意的是, k可选参数必须接在必须参数的后面。换句话说,可选参数后面不允许再出现必须参数了。
function buildName(firstName, lastName) {
    if (lastName) {
    }
    else {
        return firstName;
    }
}
// 参数默认值
function bildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + '' + lastName;
}
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join());
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join();
    }
}
// <类型> 值      值 as 类型
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handleEvent(ele, event) {
}
handleEvent(document.getElementById('hello'), 'scroll');
//handleEvent(document.getElementById('world'),'dbclick')
