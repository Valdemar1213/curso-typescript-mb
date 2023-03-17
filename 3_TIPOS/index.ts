// 1- Arrays
let numbers: number[] = [1, 2, 3];
numbers.push(5);

console.log(numbers[2]);

const nomes: string[] = ["Valdemar", "Fernanda"];

// 2- Outra sintaxe array
const nums: Array<number> = [100, 200];

nums.push(300);

console.log(nums);
console.log(nums[0]);

// 3- Any
const arr1: any = [1, "teste", true, [], { nome: "Valdemar" }];

console.log(arr1);

// 4- Parametros tipados
function soma(a: number, b: number) {
  console.log(a + b);
}

soma(4, 5);

// 5- Retorno de função
function greeting(name: string): string {
  return `Olá ${name}`;
}

console.log(greeting("Valdemar"));

// 6- Funções anônimas
setTimeout(function () {
  const salary: number = 1000;

  // console.log(parseFloat(salary));
  // console.log(salary);
}, 2000);

// 7- Tipos de Objetos
function passCordinates(coord: { x: number; y: number }) {
  console.log("X coordinates: " + coord.x);
  console.log("Y coordinates: " + coord.y);
}

const objCoord = { x: 329, y: 84.2 };
passCordinates(objCoord);

const pessoaObj: { nome: string; sobrenome: string } = {
  nome: "Valdemar",
  sobrenome: "Santana",
};

console.log(pessoaObj);

// 8- Propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log(`A: ${a}`);
  console.log(`B: ${b}`);
  console.log(`C: ${c}`);
}

showNumbers(1, 2);

// 9- Validação de parametros
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`;
  }

  return `Olá, ${firstName}, tudo bem?`;
}

console.log(advancedGreeting("Valdemar", "Santana"));
console.log(advancedGreeting("Pedro"));

// 10- Union type
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é ${balance}`);
}

showBalance(100);
showBalance("500");

const arr2: Array<number | string | boolean> = [
  1,
  "Valdemar",
  2,
  "Santana",
  3,
  true,
];

// 11- Avançando com Union Types
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado";
  }
  return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// 12- Type Alias
type ID = string | number;

function showId(id: ID) {
  console.log(`O ID é: ${id}`);
}

showId(1);
showId("200");

// 13- Interfaces
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}

const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20,
};

showCoords(coordObj);

// 14- Tipo alias x Interface
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const somePerson: Person = { name: "Valdemar", age: 35 };

console.log(somePerson);

type PersonType = {
  name: string;
};

// type PersonType = {
//   age: number
// }

// 15- Literal types
let test: "testando";

test = "testando";

console.log(test);

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção é: ${direction}`);
}

showDirection("left");

// 16- Non-null assertion
const p = document.getElementById("some-p");
console.log(p!.innerText);

// 17- Bigint
let n: bigint;

n = 1000n;

console.log(n);
console.log(typeof n);

// 18- Symbol
let symbolA: symbol = Symbol("a");
let symbolB = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
