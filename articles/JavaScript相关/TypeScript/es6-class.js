class AnimalEs6 {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return 'Jack';
    }
    set name() {
        console.log('setter:' + value);
    }
    sayHi() {
        return `My name is ${this.name}`
    }
    static isAnimal(a) {
        return a instanceof AnimalEs6
    }
}
let a = new AnimalEs6('Jack');
console.log(a.sayHi())

class CatEs6 extends AnimalEs6 {
    constructor(name) {
        super(name);
        console.log(this.name)
    }
    sayHi() {
        return 'Meow' + super.sayHi()
    }
}
let c = new CatEs6('Tom');
console.log(c.sayHi())