// 1- Tipo de objeto para função com interface
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é R$ ${product.price}.`
  );
  if (product.isAvailable) {
    console.log("O produto está disponível.");
  }
}

const shirt: Product = {
  name: "Camisa",
  price: 19.99,
  isAvailable: true,
};

showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: false });

// 2- Propriedades opcionais em interface
interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o email: ${user.email}`);

  if (user.role) {
    console.log(`A função do usuário é: ${user.role}`);
  }
}

const u1: User = { email: "valdemar12tw@gmail.com", role: "Admin" };
const u2: User = { email: "pedro@gmail.com" };

showUserDetails(u1);
showUserDetails(u2);

// 3- Readonly
interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};

console.log(fusca);

// 4- Index Signature
interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

coords.y = 15;

console.log(coords);

// 5- Herança
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const valdemar: Human = {
  name: "Valdemar",
  age: 35,
};

console.log(valdemar);

const goku: SuperHuman = {
  name: "Goku",
  age: 35,
  superpowers: ["Kamehameha", "Genki Dama"],
};

console.log(goku);
console.log(goku.superpowers[0]);
console.log(goku.superpowers[1]);

// 6- Intersection types
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

console.log(arnold);
console.log(arnold.caliber);

// 7- Readonly Array
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"];

console.log(myArray);

myArray.forEach((item) => {
  console.log("Fruta: " + item);
});

myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});

console.log(myArray);

// 8- Tuplas
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
console.log(myNumberArray);

type nameAndAge = [string, number];

const anotherUser = ["Valdemar", 35];
console.log(anotherUser);

anotherUser[0] = "Livino";
console.log(anotherUser);

// 9- Tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1, 2]);
