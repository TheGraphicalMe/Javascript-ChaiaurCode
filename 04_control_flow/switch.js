let monthNumber = 3

switch (monthNumber) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
        
    default:
        console.log("other month");
        break;
}

let val1 = null ?? undefined ?? 10 //nullish coelscing operator
console.log(val1);

//ternary operator(condition ? true : false)

const price = 800
price > 900 ? console.log("greater than 900") : console.log("less than 900");



