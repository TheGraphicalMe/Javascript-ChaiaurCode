 let a = 300
 var b = 50

 if(true){
    let a = 600
    var b = 100
    console.log("INNER: ",a)
    console.log("INNER: ",b)
 }
 console.log("OUTER: ",a)
 console.log("OUTER: ",b) 

 function one() {  // chota funx can take icecream from bada funx but not vice versa
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) --> gives error bcuz website is locally declared inside funx 2
    two()
 }

 one()

 // **************** intresting example ******************

console.log(addOne(5)); // --> this does not give error but the below example of addtwo gives error if called before

 function addOne (num) {
    return num + 1
 }

 const addTwo = function(num) { // this gives error if called before declaration 
   return num + 2
 }
 console.log(addTwo(5));   

 