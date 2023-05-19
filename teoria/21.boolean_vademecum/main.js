// funkcja boolean - zmienaia warotść innego typu na bollean

Boolean(0); // false
Boolean(2 > 1); //true
Boolean("coś"); // true
Boolean(""); // false
Boolean(["ktoś", 100, false]); // true
Boolean({}); // true, wszystkie obiekty: true
Boolean(Infinity); // true

// wartości które po konwersji zawsz są false
Boolean(0);
// Boolean(Nan);
Boolean(null);
Boolean(undefined);

// OPERATORY ZWRACAJĄCE TYP LOGICZNY
2 > 4;
2 == 3;
"1" == true;
"1" === true;
"1" === 1;

// negacja logiczna
!false;
!0;
!200;
!true;

// podwójana negacja
!!true;
!!0;
const userName1 = "Scibor";
const userName2 = "";
!!userName1;
!!userName2;

// LOGICZNE I ilczyn logiczny &&
let userAge = 22;
let userMoney = 10.2;
let beerPrice = 9;
// warunke
userAge >= 18 && userMoney > beerPrice;
1 && 0;
2 && 1;
32 && 67; // w tym przypadku zwraca drugą liczbę

// LOGICZNE LUB
const userConnections = "syn głównej księgowej";
const userExperience = 0;
Boolean(userConnections || userExperience);
"A" || 1; // zwraca pierwszą wartość
"" || 1; // zwróci pierwszą wartość
