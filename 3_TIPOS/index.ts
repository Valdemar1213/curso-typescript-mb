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
