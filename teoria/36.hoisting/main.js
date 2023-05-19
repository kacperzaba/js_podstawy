/*
Interpreter czyta kod od góry do dołu więc kolejność ma zanczenie, ale hoisting zaburza ten proces.
Zanim kod zostanie wykonany jest przetworzony interpreter przechodzi przez kod kilka razy 
*/

// HOISTING - przeniesienie części deklaracji na początek zakresu.
// na const i let nie działa hoisting

var typeBoolean = false; // sama deklaracja została przniesiona zatem typeBoolean zwraca undefinde kiedy jest powyzej wywołania
console.log(typeBoolean);

const typeNumber = 20;
console.log(typeNumber);

let typeString = "tekst";

var tablica = [];
console.log(tablica);

let obiekt = {};
console.log(obiekt);

const funkcja = function () {};
console.log(funkcja);

// FUNKCJA STWORZONA ZA POMOCĄ DEKLARACJI
// Funkcja stworzoan za pomocą deklaracji (a nie przypisanie do zmiennej) podlega hoistingowi i może być wywołana przed jej zadeklarowaniem

funkcjaNazwana();
function funkcjaNazwana() {
  console.log("jestem");
} // w tej funkcji działa bo jest stworzona za pomocą deklaracji

const funkcjaConst = function () {
  console.log("przypisanie zmiennej");
}; // tutaj nie działa bo ta funkcja jest stworzona za pomocą zmiennej
funkcjaConst();


var funkcjaVar = function () {}; // nie dział bo to tak jakby wywołać undefined()
funkcjaVar();