const marvel_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros) --> treated new array as single element and cretaes nested array
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

const arr2 = [1 ,2 ,3 ,[4 , 5 ],7 ,[8 ,[9 ,10 ]] ]
const flatarr = arr2.flat(Infinity)
console.log(flatarr);   

console.log(Array.isArray("ayush"));
console.log(Array.from("ayush"));
console.log(Array.of("ayush","singh","rajput"));
