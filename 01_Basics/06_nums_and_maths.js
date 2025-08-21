const balance = new Number(100.35976)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 23.9899
console.log(otherNumber.toPrecision(3)) 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

//**********************MATHS************************ */
console.log(Math.abs(-4))
console.log(Math.round(56.8));
console.log(Math.floor(56.8));
console.log(Math.random())  // 0-1 values
console.log((Math.random()*10) + 1)  // values btw 1-9
