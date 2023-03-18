// 1- Generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData("Testando generic"));

// 2- Constraint em Generics
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));

// 3- Interface com Generic
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen: Pen = {
  name: "Caneta BIC",
  wheels: false,
  engine: false,
  color: "Azul",
};

console.log(myCar);
console.log(myPen);

// 4- Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
  hd: "2TB",
  ram: "32GB",
};

console.log(getSomeKey(server, "ram"));

// 5- keyof type operator
type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, key: C): string {
  return `${obj[key]}`;
}

const myChar: Character = {
  name: "Valdemar",
  age: 35,
  hasDriveLicense: true,
};

console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));

// 6- typeof operator
const userName: string = "Valdemar";
const userName2: typeof userName = "Livino";

type X = typeof userName;

const userName4: X = "João";

// 7- Indexed acess types
type Truck = { km: number; kg: number; description: string };

type Km = Truck["km"];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "Caminhão para pouca carga",
};

function showKm(km: Km) {
  console.log(`O veículo tem a km de: ${km}`);
}

showKm(newTruck.km);

const newCar = {
  km: 5000,
  kg: 1000,
};

showKm(newCar.km);

// 8- Conditional Expressions type
interface A {}

interface B extends A {}

interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 5;

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;

// 9- Template literals type
type testA = "Text";

type CustonType = `some ${testA}`;

const testing: CustonType = "some Text";

type a1 = "Testando";
type a2 = "Union";

type a3 = `${a1} | ${a2}`;
