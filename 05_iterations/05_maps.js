const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.map ( (num) => {return num + 10})
console.log(newNums);

const newNums2 = []

newNums.forEach ((num) => { // same thing but using for each
    num += 10
    newNums2.push(num)
})
console.log(newNums2);
 
// Chaining methods

const newNums3 = myNums
                .map( (num) => num*10)
                .map( (num) => num+1)
                .filter( (num) => num>40)
console.log(newNums3);
                