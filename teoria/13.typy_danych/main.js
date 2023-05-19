// string
console.log(typeof "tekst");

// number
console.log(typeof 1000);

// boolean
console.log(typeof true);
console.log(typeof 2 == 3);
bool = 2 == 4;
console.log(typeof bool);

// undefined
let dateFirstLogin;
console.log(typeof dateFirstLogin);

let userSecondName = null;
console.log(typeof userSecondName);

// symbol
console.log(typeof Symbol());

// typy referencyjne - obiekty
console.log(typeof {});
console.log(typeof function () {});

// kopiowanie
let primitiveValue = 23;
let primitiveValue2 = primitiveValue;
primitiveValue += 12;
console.log(primitiveValue, primitiveValue2);

// referencje
let referenceValue = [1, 2, 3];
let referenceValue2 = referenceValue;
referenceValue[3] = 9;
referenceValue2[4] = 65;
console.log(referenceValue, referenceValue2);
referenceValue;
