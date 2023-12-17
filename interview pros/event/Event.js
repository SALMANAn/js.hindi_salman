//Event Bubbling &  Capturing
//Stop Propagation, Intermedate Propagation & Prevent Default

let div=document.querySelector("div")
let  button=document.querySelector("button")


div.addEventListener("click",(Event)=>{
    console.log("div");
})

button.addEventListener("click",(Event)=>{
   Event.stopPropagation()
    console.log(button);
})
button.addEventListener("click",(Event)=>{
    Event.stopeImdiatePropagation
})
console.log("button");


button.addEventListener("click" ,(Event)=>{
    Event.stopImmediatePropagation()
    console.log("button1");
})
let a=document.querySelector("a");

a.addEventListener("click" ,(Event)=>{
   Event.preventDefault()
    console.log("button");
 })