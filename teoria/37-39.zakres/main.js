// Zakres mówi nam gdzie dana zmienna jest widoczna i gdzie może być wykorzystana

// ZAKRES GLOBALNY
// Poza blokami i funkcjami. Przestrzeń najwyższego rzędu.

var userID = 102;
const colorID = 5;
let userAge = 20;

console.log(userID);
console.log(userAge);
console.log(colorID);

userID = 200;
// colorID = 12; // nie można bo const
userAge = 21;

// zmienne zadeklarwane w zakresie globalnym są widoczne wszędzie w programie(również w innych zakresach)

const userName = "Adam";

function showName() {
  const userName = "Jan"; // na początku interpreter szuka nazwy wewnątrz funkcji
  //   userName = "Jan"; // tutaj wyrzuca błąd bo interpreter szuka zadeklarowanej wartości ale nie znajduje więc wychodzi z funkcji i znajduje userName z const'em
  console.log(userName);
}

showName();
console.log(userName);

// ZAKRES LOKALNY(FUNKCJA)

var varFun = "a";
let letFun = "b";
const constFun = "c";

function variablesFunction() {
  var inFunction = "jestem"; // nie można odwołać się z zewnątrz
  let varFun = 0;
  // console.log(inFunction);
  // varFun = 4; // możemy wewnątrz odwoałać się do zakresu globalnego i go zmienić
  // let letFun = "wew";
  // console.log(letFun);
  // const constFun = 6;
  // console.log(funInFun); // błąd bo ta zmeinna jest w niższym poziomie

  function showVariable() {
    const constFun = "funkcja w funkcji";
    varFun = "nadpisze wartości zmiennej z wyższego zakresu";
    funInFun = "lokalny w lokalnym";
    console.log(varFun, letFun, constFun);
  }
  showVariable();
}
variablesFunction();
// poziom lokalny mając w sobie i na zew dwie zmienne o tej sameij nazwie zawsze bierze tą która znajduje się wewnątrz

// showVariable(); // ta funkcja jest zagnieżdżone i nie ma od niej dostępu w zakresie globalnym

// PRZYKŁAD 2
function calculate(a, b) {
  // const a = a // błąd ponieważ a i b zostały zadeklarowane powyżej w parametrach funkcji
  // const b = b;
  const number1 = a;
  let number2 = b;
  console.log(a, b, number1, number2);

  function add(x, y) {
    // number2 = 10; // nadpisuje
    const number2 = 32;
    console.log(x + y);
  }
  add(number1, number2);
}

calculate(2, 3);

// ZAKRES LOKALNY (BLOK) - ZAKRES BLOKOWY

// Przykład 1
let var1 = 1;
const var2 = 2;
var var3 = 3;
{
  let var1 = "wewnętrzne 1";
  const var2 = "wewnętrzne 2";
  var var3 = "wewnętrzne 3";
  console.log(var1, var2, var3);
  var1 = "wewnętrzne 1,";
  // var2 = "wewnętrzne 2.";
  var3 = "wewnętrzne 3,";
}
// console.log(var1, var2, var3);

// Przykład 2

const a = "1 w zakresie globlnym";
let b = "2 w zakresie globlnym";
var c = "3 w zakresie globlnym";

if (true) {
  console.log(a); // zmienna globalna jest widoczna w bloku
  // a = "przypisanie do a"; // nie można przypisać bo const
  b = "2 w bloku"; // nadpisuje b
  console.log("b w bloku to: " + b);
  var c = "3 w bloku";
}
console.log(b, c);

// Przykład 3

let i = 9;

for (let i = 0; i < 10; i++) {
  // let i = 10;
  console.log(i);
  const inFor = "wewnątrz pętli";
  if (i < 4) {
    i = 10;
    console.log("i wewnątrz inst war " + i);
  }
}
