// JAK STOWRZYĆ FUNKCJĘ

// 1. WYRAŻENIE FUNKCYJNE (funkcja bez nazwy - do funkcji odwołujemy się za pomocą zmiennej). Po angielsku Function Expression. tu nie działa histing

// Szkeilet funkcji
// const nazwaFunkcjiCoRobi = functio() {}

const showMessege = function (message) {
  console.log(message);
};

showMessege("wywołanie"); // wywolanie funcji

// 2. DEKLARACJA FUNKCJI
// kluczowe function, potem nazwa.

// Szkielet funcji
// const nazwaFunkcjiCoRobi() {}
function addNumbers(number1, number2) {
  return number1 + number2;
}

console.log(addNumbers(2, 3));
console.log(addNumbers(1.2, 1222));
console.log(addNumbers("A", "B"));

// FUNKCJA DZIĘKI HOISTINGOWI jest mozliwa do uruchomienia nawet przed deklaracją

showCourseName();
function showCourseName() {
  console.log("dziala");
}

// 3. KONSTRUKTOR (Function Constructor)
// Szkielet funkcji
// const textAlert = new Function("text", "alert(text);");
// textAlert("konstruktor");

// 4. FUNKCJA STRZAŁKOWA

// Szkielet funkcji
// const nazwaFunkcji = () => {};

const showMeTextMyArrowFunction = (txt) => {
  console.log(txt);
};
showMeTextMyArrowFunction("funkcja ze strzałkami");

// PRZPISANIE FUNKCJI DO INNEJ ZMIENNEJ
const showNewCourse = showCourseName;
// oba elem prowadzą do jednego miejsca w pamięci

// WYWOŁANIA FUNKCJI
// nazwa() - tak wywołujemy funkcję
// nazwa(argument1, argument2) - wywoł

const name = "Kacper";

// Przykład 1 - funkcja która ma wpływ na program (efekt uboczny) nie nie zwraca (undefined)
// const divideBy2 = function (number) {
//   console.log(number / 2);
// };
// const result1 = divideBy2(10);

let number = 0;
const add = function () {
  number++;
  console.log(number);
};

// Przykład 2 - Funkcja która tyko przetwarza dane (bez efektu ubocznego)
const dividedBy3 = function (number) {
  return number / 3;
};

dividedBy3(10, 2); // mozna podać więcej argumentów

dividedBy3.length; // użwywamy żeby sprawdzić ile argumentów wymaga funkcja
