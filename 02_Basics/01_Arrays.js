const arr = [0,1,2,3,4] //--> js arrays are resizable  
console.log(arr[0]);

arr.push(5)
console.log(arr);
arr.pop()
console.log(arr);

const newArr = arr.join()  // --> arr to str
console.log(newArr);

const sliceArr = arr.slice(1,3)
console.log("slice ",sliceArr)
console.log("original ",arr)

const spliceArr = arr.splice(1,3) // -->changes the original arrays
console.log("splice ",spliceArr)
console.log("original ",arr)