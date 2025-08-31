// Immediately Invoked Function Expressions (IIFE)

(function chai(){   // named iife
    console.log(`DB CONNECTED`)
}) ();         // if two iife written together give ";"

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) (`Ayush`)