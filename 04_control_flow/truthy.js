const userEmail=[]
if(userEmail){
    console.log("Gote user email");
}else{
    console.log("Don't have user email");
}

// falsy values: false ,0 -0 ,BigInt,0n, " ", null,undefine,NaN
//thruthy value: truethy,"0","false"," ",[ ],{}function(){}


//if(userEmail.length===0){
   // console.log("Array is empty");
//}
const emptyObj ={}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
    
}
//Nullish Coalescing Operator (??): null undifined
//let val1;
//val1=5 ?? 10
//val1 =null ?? 15
//val1 =null   ?? 15 ??10


console.log(val1)

//terniary Operator
//condition  ? true :false

const iceTeaPrice=100
iceTeaPrice <=80 ? console.log("less than 80") :console.log("more than 80");



