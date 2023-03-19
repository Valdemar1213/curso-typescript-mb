"use strict";
// 1- Campos em classe
class User {
}
const valdemar = new User();
valdemar.name = "Valdemar";
valdemar.age = 35;
console.log(valdemar);
// 2- Constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const pedro = new NewUser("Pedro", 22);
console.log(pedro);
// 3- campos readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
// 4- Herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5- Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
// 6- this em classe
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
// 7- Getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const valdemarsantana = new Person("Valdemar", "Santana");
console.log(valdemarsantana.name);
console.log(valdemarsantana.fullName);
// 8- Setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso!");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso!");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é: ${this.title}`;
    }
}
// 10- Override de métodos
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("testando outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11- Public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
const dInstance = new D();
console.log(cInstance.x);
console.log(dInstance.x);
// 12- Protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("Este método é protegido!");
    }
}
class F extends E {
    showX() {
        console.log(`X: ${this.x}`);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
// 13- Private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Método privado!");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObject = new PrivateClass();
console.log(pObject.showName());
pObject.showPrivateMethod();
// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod();
//   }
// }
// 14- Static métodos
class StaticMembers {
    static staticMethod() {
        console.log("Este é um método estático!");
    }
}
StaticMembers.prop = "teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15- Generic Class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
    get showSecond() {
        return `O second é: ${this.second}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(newItem.showSecond);
// 16- Parameters properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `O preço é: ${this.price}`;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
// 17- Class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Valdemar");
console.log(pessoa);
console.log(pessoa.name);
// 18- Abstract class
class AbstractClass {
}
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbstractObject = new AbstractExample("Fernanda");
newAbstractObject.showName();
// 19- Relações entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
