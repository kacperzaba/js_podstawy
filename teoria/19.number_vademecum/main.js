const integerExample = 100;
const decimalExample = 100.212;
console.log(typeof integerExample);
console.log(typeof decimalExample);

const hexNumber = 0xff;

console.log(0b011101);

// METODY

const newNumber = 123.45;
newNumber.toFixed(); // metoda toFixed zaokrągle liczbe do miejsca po przecinku podanego w nawiasie podaje wynik w stringu
newNumber.toFixed(1);

// console.log(123.toFixed()); // nie działa bo kropkę bierze za to żeby podać ułamek
console.log((123).toFixed(2)); // zatem należy wpisać 2 kropki lub nawias

// metoda toString() - konwersja typu number na string, w nawiasie można wpisać wybrany system liczbowy
console.log(newNumber.toString(2));
(255).toString(16);

newNumber.toExponential(); // notacja naukowa
typeof newNumber.toExponential();

// FUNKCJE

// sprawdzenie czy liczba jest całkowita
Number.isInteger(decimalExample); // false
Number.isInteger(100.1);
Number.isInteger(100);

// sprawdzenie czy liczba jest skończona
Number.isFinite(2); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(1e400); // false
Number.isFinite(3e300); // true

typeof NaN; // Not a number, liczba której nie można rozpoznać (powstanie np. 2 * "string")

typeof Infinity; // gdy przkroczymy największą/najmniejszą wartość, albo podzielimy przez 0

// Tworzenie obiektu instancji number
const numberObj = new Number(); // bez podania wartości da 0
const numberObj2 = new Number("doś"); // podanie stringa da Nan, true da 1, false da 0
const numberObj3 = new Number("222.121"); // podanie stringa da liczbę
const numberObj4 = new Number(222.121); // wynik taki sam jak wyżej

// DZIAŁANIA ARYTMETYCZNE
console.log(20 % 2); // modulo
console.log(2 ** 6); // potęga

// KONWERSJA NIEJAWNA liczba w stringa lub string w liczbę
20 + "20"; // "2020"
20 * "20"; //400

// KONWERSJA JAWNA
Number("210"); // 210
Number(true); // 1
Number(""); // 0
Number("cos"); // NaN

// WYKORZYSTANIE KONEWRSJI NIEJAWNEJ
"20" * 1; // zamiana na number
+"20"; // string na liczbę
20 + ""; // liczba na stringa

(200).toString();
String(200);

// parseInt() pozwala zamienić stringa na number, drugi argument to system licznowy
parseInt("20", 10); // 20
parseInt("100", 2); // 4
parseInt("0xff", 16);
parseInt("100"); //100
parseInt("0xff"); //255
parseInt("222abc"); //222
parseInt("12.8");
parseFloat("12.8");

// WBUDOWANY OBIEKT Math MA WIELE METOD KTORE MOŻNA WYKORZYSTAĆ PODAJĄC W TAKIEJ METODZIE ARGUMENT JAKO LICZBĘ
Math.round(200.38);
Math.round(200.51);
Math.floor(200.55);
Math.random();
