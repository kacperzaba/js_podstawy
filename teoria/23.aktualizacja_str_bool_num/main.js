// Number

console.log((0.1 + 0.2).toFixed(1));
console.log((0.1 * 100 + 0.2 * 100) / 100);

Number.MAX_VALUE;

const value = "222.313231321313131314435456";

const newValue = Number(value);
console.log(newValue);
const newValue2 = Number.parseInt(value);
const newValue3 = Number.parseFloat(value);
console.log(newValue, newValue2, newValue3);
// +value == Number(value)

// Math
Math.pow(2, 64);
Math.min(3, 45, 2, 5454355, -1000);
Math.max(3, 45, 2, 5454355, -1000);
Math.ceil(21.1); // zaokroągla do góry
Math.floor(223.9); // zakorągla w dół

// String
"cos".length;
"jakis string".startsWith("jak");
"jakis string".endsWith("giga");
