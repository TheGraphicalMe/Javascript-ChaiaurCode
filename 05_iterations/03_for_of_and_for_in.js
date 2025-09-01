// for of 

const arr = [1 , 2 , 3 , 4 , 5]
for (const num of arr) {
    // console.log(num);
    
}
//Maps

const map = new Map()  //--> for of loop for maps
map.set('IN' , 'INDIA')
map.set('USA' , 'UNITED STATES OF AMERICA')
map.set('FR' , 'FRANCE')

for (const [key,value] of map){
    console.log(`${key} :- ${value}`)
}
// for of loop cant be used for objects


//for in
const myObj = {
    py: "python",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const heros = ["batman" , "spidermon" , "ironman"]
for (const key in heros) {
    //console.log(key)  --> for in return key or index 
    console.log(heros[key])
}