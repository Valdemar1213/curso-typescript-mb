"use strict";
// 1- Arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
const nomes = ["Valdemar", "Fernanda"];
// 2- Outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
console.log(nums[0]);
// 3- Any
const arr1 = [1, "teste", true, [], { nome: "Valdemar" }];
console.log(arr1);
// 4- Parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// 5- Retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Valdemar"));
// 6- Funções anônimas
setTimeout(function () {
    const salary = 1000;
    // console.log(parseFloat(salary));
    // console.log(salary);
}, 2000);
// 7- Tipos de Objetos
function passCordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCordinates(objCoord);
const pessoaObj = {
    nome: "Valdemar",
    sobrenome: "Santana",
};
console.log(pessoaObj);
// 8- Propriedades opcionais
function showNumbers(a, b, c) {
    console.log(`A: ${a}`);
    console.log(`B: ${b}`);
    console.log(`C: ${c}`);
}
showNumbers(1, 2);
