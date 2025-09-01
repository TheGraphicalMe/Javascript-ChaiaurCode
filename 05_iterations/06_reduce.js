const myNums = [1,2,3]

// const myTotal = myNums.reduce( function ( acc , currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)

const myTotal = myNums.reduce( (acc,curr) => acc+curr , 0)
//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "coffee",
        price: 299
    },
    {
        itemName: "cold drink",
        price: 40
    },
    {
        itemName: "facewash",
        price: 350
    },
    {
        itemName: "soap",
        price: 199
    }
]

const priceToPay = shoppingCart.reduce ( (acc,item) => acc + item.price , 0)
console.log(priceToPay);
