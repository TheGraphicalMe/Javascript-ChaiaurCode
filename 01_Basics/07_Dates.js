const myDate = new Date()
console.log(myDate)  // not readable much
console.log(myDate.toDateString())
console.log(myDate.toLocaleString('default', {weekday:"short"}))

let myTimeStamp = Date.now()
console.log(myTimeStamp)  // --> gives time in ms from 1 jan 1970