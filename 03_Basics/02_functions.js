function calculateCarPrice(val1 , val2 , ...num1){ // --> rest operator
    return num1
}

console.log(calculateCarPrice(200,300,400,500,600))

const user = {
    username: "ayush" , 
    price: 499
}

function handleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and course price is ${anyobject.price}`);
}
handleObject(user)

const newArray = [200 , 400 , 100 , 600]

function returnSecondValue (getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray));
