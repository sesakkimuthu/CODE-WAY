//let Fname = prompt("Enter your name");

//console.log(Fname);

//let n = 5;

//for (let i = 0; i <= n; i++) {
//console.log(i);
//}

//let i = 1,
//  n = 5;
//while (i <= 5) {
//  console.log(i);
//  i += 1;
//}
/*
let sum = 2;
let number = parseInt(prompt("Enter the number: "));

while (number >= 0) {
  sum += number;
  number = parseInt(prompt("Enter the number: "));
}
console.log(`The sum is ${sum}.`);

*/

//let i = 2;
//n = 5;
//
//do {
//  console.log(i);
//  i++;
//} while (i < n);

/*
let sum = 0;

number = 0;

do {
  sum = +number;
  number = parseInt(prompt("Enter the number : "));
} while (number >= 0);

console.log(`The sum id ${sum}.`);
*/
/*
for (let i = 1; i <= 10; i++) {
  if (i == 8) {
    break;
  }
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
*/

/*
let a = 3;

switch (a) {
  case 0:
    a = 1;
    break;
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  case 3:
    a = "three";
    break;
  default:
    a = "not fount";
    break;
}
console.log(`The value is ${a}`);
*/

/*
//switch case Examples
let result;

const operator = prompt("Enter the operator(either +, -, * 0r / ");

const number1 = parseFloat(prompt("Enter the first number: "));
const number2 = parseFloat(prompt("Enter the second number: "));

switch (operator) {
  case "+":
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;

  case "-":
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;

  case "*":
    result = number1 * number2;

    console.log(`${number1} *${number2} = ${result}`);
    break;
  case "/":
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;
  default:
    console.log("invalid operator");
}
*/

/*

Multiple switch

let fruit = "pineapple";

switch (fruit) {
  case "apple":
  case "orange":
  case "mango":
    console.log(`${fruit} is a fruit .`);
    break;
  default:
    console.log(`${fruit} is not a fruit`);
    break;
}
*/
let cardNumInput = document.querySelector("#cardNum");
console.log(cardNumInput);

cardNumInput.addEventListener("keyup", () => {
  let cNumber = cardNumInput.value;
  cNumber = cNumber.replace(/\s/g, "");

  if (Number(cNumber)) {
    cNumber = cNumber.match(/.{1,4}/g);
    cNumber = cNumber.join(" ");
    cardNumInput.value = cNumber;
  }
});
