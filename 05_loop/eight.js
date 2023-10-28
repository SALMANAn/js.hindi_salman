const myNums=[1,2,3]
//const myTotal=myNums.reduce(function (acc,currval){
    //console.log(`acc: ${acc} and currval: ${currval}`);
    //return acc+currval
//},0)
//console.log(myTotal);
const myTotal=myNums.reduce( (acc,curr) => acc+curr,0)
console.log(myTotal)

const shoppingCart=[
    {
        iemName:"js course",
        price:2999

    },
    {
        iemName:"mobile dev course",
        price:3999

    },
    {
        iemName:"data science",
        price:14999

    },

    
]
const priceTopay=shoppingCart.reduce( (acc,item) => acc+item.price,0)
console.log(priceTopay);
