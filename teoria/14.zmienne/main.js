// let firstLetterUserName jest tym samym co:
// let firstLetterUserName = undefined;

let firstLetterUserName;
firstLetterUserName = "J";

let userSurname = "Smith";

let showUserName = function () {
  console.log(userName);
};

let name, age, address;
let possition = [200, 100],
  score = null,
  time = 20.2,
  ipAddress;
const firstUser = "Ania",
  secondUser = "Tomasz";

let example1 = 200; // pryzpisując nową wartość do zmiennej usuwamy starą
example1 = example1 + 1; // 200 + 1
example1++;

const example2 = 200;
// example2 = example2 + 1; nie można bo const to stała

let example3 = example2;
example3--;

const arrayExample = [1, "Adam"];
// arrayExample = [1, 2]; nie można dwa razy przypisać obiektu bo jest const

const arrayExample2 = [1];
arrayExample2[1] = 2; // obiekt można modyfikować

var globalProperty = "za pomocą var"; // obiekt globalny (window) z var, z let is const nie

// // hoisting - wynoszenie zmienncyh na początek kodu, dotyczy tylko deklaracji bez przypisania
// console.log(varVariable);
// var varVariable = 1;
// console.log(letVariable); // przy let nie działa
// let letVariable = 1;
// console.log(constVariable);
// let constVariable = 1;
