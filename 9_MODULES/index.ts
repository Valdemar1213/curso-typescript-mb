// 1- Importação de arquivos
import importGreet from "./greet.js";

importGreet();

// 2- Import de variável
import { x } from "./variable.js";

console.log(x);

// 3- Múltiplas importações
import { a, b, myFunction } from "./multiple";

console.log(a);
console.log(b);
myFunction();

// 4- Alias para importações
import { someName as name } from "./changename.js";

console.log(name);

// 5- Importando tudo
import * as myNumbers from "./numbers";
console.log(myNumbers);

const nX = myNumbers.n1;
console.log(nX);

myNumbers.showNumbers();

// 6- Importando tipos
import { Human } from "./myType.js";

class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const fernando = new User("Fernando", 65);
console.log(fernando);
