//function Declaration function
function greet(){
    console.log("Hello, "+ "!");
}
//calling the function
greet()


//function with parameter and Return Value
function add(a,b){
    return a+b;

}
//calling the function and using the returen value 
let result=add(5,8);
console.log("sum ",result);


//Anonymous function 

let multiply =function(x,y){
    return x*y
};
//calling the Anonymous function 
let product=multiply(8,9)
console.log("Product:" , product);

//Arrow function 
let divide=(a,b)=>a/b

//calling the arrow function
let salman=divide(999,9.9);
console.log("salman:",salman);