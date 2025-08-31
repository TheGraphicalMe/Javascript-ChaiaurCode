const user = {
    username: "Ayush",
    price: 999,

    welcomeMessage: function(){
        console.log (`${this.username} , welcome to website`)
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); // --> outside the scope this gives {}

// function chai() {  
//     let username = "ayush"
//     console.log(this.username)
// }

// chai()   --> 'this' cant be used inside normal funx

// const chai = () => {  -->  in arrow funx "this" cant be used like this
//     let username = 'ayush'
//     console.log(this);
//}

const addTwo = (num1,num2) => (num1+num2)  // --> implicit return
console.log(addTwo(3,4))

const object = () => ({username: "Ayush"})  // --> implicit return for object return 
console.log(object())