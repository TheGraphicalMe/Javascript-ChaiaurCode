//singleton

const tinderUser = new Object() 

tinderUser.id = "123abc"
tinderUser.name = "Ayush"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ayush",
            lastname: "Singh"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

//const obj3 = Object.assign ({} ,obj1 , obj2) // --> to merge two objects . {} this says that all source will be added to this if u dont use this the obj1 will be altered as target

const obj3 = {...obj1 , ...obj2}
console.log(obj3)

console.log (Object.keys(tinderUser))
console.log (Object.values(tinderUser))
console.log (Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi" , 
    price: "999" ,
    courseInstructor: "hitesh"
}

const {courseInstructor: Instructor} = course  // destructure of object
console.log(Instructor);

