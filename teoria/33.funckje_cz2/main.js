// Wartości domyślne
// const addTwoNumbers = (x = 2, y = 4) => {
//   const result = x + y;
//   console.log(result);
//   return result;
// };

// Deklaracaj funcji (to samo ale inny sposób)
const addTwoNumbers = function (x = 0, y = 0) {
  const result = x + y;
  console.log(result);
  return result;
};

// CALLBACK
// Funkcja wywołania zwrotnego, czyli funkcja, przekazania jago argument do funkcji i wywołana w niej
// Funkcja do której przekazujemy inna funkcję (czyli nasz callback) nazywa się funkcją wyższego rzędu

// Przykład 1 (callback)
function count(x, callback) {
  return callback(x);
}

function addOne(number) {
  number++;
  console.log(number);
  return number;
}

function substractOne(number) {
  number--;
  console.log(number);
  return number;
}

const result = count(5, addOne);
const result1 = count(12, addOne);
const result2 = count(5, substractOne);
const result3 = count(21, substractOne);

// Przykład 2 (callback)
window.addEventListener("click", function () {
  console.log("click");
});

function showClick() {
  console.log("click");
}
window.addEventListener("click", showClick);

// Przykład 3 (callback)
// setInterval(() => console.log("mineły 3 sekundy"), 3000);
// const showTime = () => {
//   console.log("mineły 2 sekundy");
// };
// setInterval(showTime, 2000);

// Przykład callback
const usersAge = [20, 30, 21, 17, 67, 96, 55];

// userAge.forEach((userAge) => console.log(`Wiek użytkownika to ${userAge}`));
usersAge.forEach(function (userAge) {
  console.log("wiek użytkownika " + userAge);
});

// ARGUMENTS - zawieta listę argumetów przekazanych do tablicy
const showArguments = function () {
  console.log(arguments); // arguments - nazewa dla obiektu (nazwa przypisania)
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(typeof arguments);
  console.log(Array.isArray(arguments));
};
showArguments("1", null, {});

// Wykorzystanie w praktyce

const addAllNumbers = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const usersMoney = addAllNumbers(3, 2, 200, 1, 3);

// Jak sprawić by funkcja zachowała się inaczej przy różnych argumentach

function showInfoAboutUser(age, name, sex) {
  if (arguments.length === 0) {
    console.log("nie mam żadnych informacji o tym użytkowniku");
  } else if (arguments.length === 1) {
    console.log(`Użytkownik ma ${age} lat`);
  } else if (arguments.length === 2) {
    console.log(`Użytkonik ma ${age} lat i ma na imię: ${name}`);
  } else {
    console.log(`Użytkonik ma ${age} lat, ma na imię: ${name} i jest ${sex}`);
  }
}
