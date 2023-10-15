//primitive data type
// 7 type : string ,Number ,boolean,null, undefined, Symbol,BigInt

const score=100;
const scoreValue=100.3
const isloggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId)

const bigNumber=4565663232n

//Refrence (non primitive type)

// type:Array Objects,Funcations
const hero=["shaktman","nagraj","doga"]
let  myObj={
    name:"salman",age:24,
}
const  myFunction=function(){
    console.log("hello world");
}
console.log( typeof bigNumber)
console.log(typeof scoreValue)
console.log(typeof isloggedIn)
console.log(typeof outsideTemp)
console.log(typeof userEmail)
console.log(typeof anotherId )
console.log(typeof anotherId )
console.log(typeof hero)
console.log(typeof   myFunction)
