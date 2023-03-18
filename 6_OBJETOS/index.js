"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$ ${product.price}.`);
    if (product.isAvailable) {
        console.log("O produto está disponível.");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: "valdemar12tw@gmail.com", role: "Admin" };
const u2 = { email: "pedro@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
coords.y = 15;
console.log(coords);
const valdemar = {
    name: "Valdemar",
    age: 35,
};
console.log(valdemar);
const goku = {
    name: "Goku",
    age: 35,
    superpowers: ["Kamehameha", "Genki Dama"],
};
console.log(goku);
console.log(goku.superpowers[0]);
console.log(goku.superpowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
console.log(arnold.caliber);
// 7- Readonly Array
let myArray = ["Maçã", "Laranja", "Banana"];
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const anotherUser = ["Valdemar", 35];
console.log(anotherUser);
anotherUser[0] = "Livino";
console.log(anotherUser);
// 9- Tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
