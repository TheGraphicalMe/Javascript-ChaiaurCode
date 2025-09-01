// for Each

const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// coding.forEach ( function (item) {
//     console.log(item)
// })

// coding.forEach( (val) => {
//     console.log(val)
// })

// function printMe (x){
//     console.log(x);
// }

// coding.forEach(printMe)

coding.forEach((item , index , arr) => {
    //console.log(item , index , arr)
})

const myCoding = [
    {
        languageName: "javascript" , 
        lanuguageFileName: "js"
    },
    {
        languageName: "java" , 
        lanuguageFileName: "java"
    },
    {
        languageName: "python" , 
        lanuguageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    //console.log(item.languageName);
})

const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4 )
console.log(newNums);



