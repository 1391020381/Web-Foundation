abstract class Animal4 {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi()
}
class Cat4 extends Animal4 {
    public sayHi() {
        console.log(`${this.name}is eating`)
    }
}