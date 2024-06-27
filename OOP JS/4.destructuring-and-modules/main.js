const {add, MyVariable} = require("./add") // ini adalah cara mengimpor suatu file berisi codingan yang ingin kita pakai pada file codingan saat ini
const {multiply} = require("./multiply")
// const myLogFn = require("./ouput") // bisa seperti ini tetapi tidak di sarankan.
const {outputResult} = require("./ouput")

let x = 5;
let y = 7;

const additionResult = add(x, y);
const multiplyResult = multiply(x, y);

// console.log(add(x, y));
// console.log(multiply(x, y));
// console.log(MyVariable);
console.log(outputResult(additionResult));
console.log(outputResult(multiplyResult));