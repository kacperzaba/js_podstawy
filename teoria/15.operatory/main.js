2 + 2; //4
"2" + "2"; //22
"2" + 2; //22
2 + true; //3
"2" + true; //2true

// podział operatorów ze względu na ilocs argumentów
let result;
result = 1; // dawa argumenty
result++; // inkrementacja - jeden argumet

// opetatory arytmetyczne
let position = 2;
// position++; // najpierw zwraca potem dodaje
// position--;
// ++position; // najpierw dodaje potem zwraca
// --position;
// przypisanie
position += 10;
position -= 2;
position *= 4.2;
position /= 2;
let newPosition = 0;
newPosition += position;

// modulo - reszta z dzielenia
10 % 9;
20 % 4;

// ** potega
2 ** 5;

// OPERATOR LOGICZNY
20 > 40;
"tekst".length > 3;
2 <= 2;

// operator porównania
"tekst" == "tekst2";
"tekst" == "tekst";
"2" == 2; // program dokonuje konwersji typów
"2" === 2; // bez konwersji typów, a więc porównuje też typ

// operator rózne od
100 != 101;
"100" != 100;
"100" !== 100; // bez konwersji typów

// logiczne zaprzeczenie (negacja) zamienia na typ boolean i odwaraca
!"cos";
!!(2 - 2); // podwójna negacja
!!200;
// suma logiczna (logiczne "lub")
true || false;
false || true;
true || true;
false || false;
true || false;
null || 200;
0 > 2 || 5 > 4;
// iloczyn logiczny (logiczne "i")
true && false;
200 && 0;
"1" && "2";
"1" && "";
20 > 10 && 10 < 20;
20 > 10 && 10 == 20;

// kolejność operatorów
2 + 3 * 5;
(2 + 3) * 5;
"2" + 3 * 5;

// operator warunkowy(trójargumetnowy)
3 > 2 ? "tak" : "nie";
