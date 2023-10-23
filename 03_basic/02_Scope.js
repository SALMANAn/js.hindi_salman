//let a=20
var c=300 //Globle scope
let a=400
//const b=30
//var c=45
if (true) {
    let a=20
    const b=30
   // var c=45   //scope
   console.log("INNER: " ,a);  // block scope
}


console.log(a);
//console.log(b);
console.log(c);