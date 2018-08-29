const isPrime = require("prime-number")
const arrayGenerator = require("array-generator")
let n = 7;
var a = [];
if(isPrime(n)) {
			a = arrayGenerator(n, 0, n);
}


console.log("resultado " + a);