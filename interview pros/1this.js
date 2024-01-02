//*use strict*

//This is globle scope

console.log(this);// globle Object this -window object

// This is inside a function

//the value depend on strict /non strict node
function x(){
    console.log(this);
}
x()

//this is strict node -(this substitution)

//this value of this keyword is undefined or null definded 
//this will  inside  a object 's method
// call apply bind method (sharing method)
//this inside arrow function 
// this inside nested arrow function 
