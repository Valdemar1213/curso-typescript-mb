const firstName = "Valdemar";
const anotherName = 1;
const x = true;

function greeting(name: string) {
  console.log(`Olá ${name} !!`);
}

greeting(firstName);

const peso = 100;
const altura = 180;

function imc(peso: number, altura: number) {
  console.log(peso / (altura * altura));
}
