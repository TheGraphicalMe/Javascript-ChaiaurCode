const mySym = Symbol  ("key1")

const JsUser = {
    name : "Ayush" , 
    age : 20 , 
    "location" : "Ranchi" , 
    email: "ayushsingh@gmail.com" ,
    [mySym] : "mykey"  
}

console.log(JsUser.email)
console.log(JsUser[mySym])
console.log(JsUser["location"]) // --> not necessary can also use .location

//Object.freeze(JsUser)   // --> locks values
JsUser.location = "Delhi"
console.log(JsUser)

JsUser.greetings = function(){  // this is how funx is created
    console.log(`hello js user , ${this.name}`) // this used access property from same object
}                                               // use string interpolation then use backticks ``

JsUser.greetings()
   
