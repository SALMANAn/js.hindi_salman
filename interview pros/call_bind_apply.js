
function greet(greeting,punctuation){
    console.log(greeting + " ," + this.name + punctuation);
 
 }
 const person={
     name:"salman "
 };
 //call function
 greet.call(person,"hello "+ " ","!")
 
 //Using apply
 greet.apply ( person,["Hello"+" "+"how are you"])
 //Using bind()
 let boundGreet=greet.bind(person,"hello "+ "!" )
 boundGreet()
 
 // Apply call Bind Again
 
 //problem statement
 
 let userDetails={
     name:"Md Salman Ansari",
     Age:24,
     Desgination:"Softwere Engineer",
 
 }
  let printDeatails=function(state,country){
     console.log(this.name+" " +this.Age+" ,"+this.Desgination+ " "+state+" "+country);
 }
 printDeatails.call(userDetails,"delhi","India")
 
 let userDetails1={
     name:"Md Sarfaraz Ansari",
     Age:27,
     Desgination:"Softwere front Engineer",
     
 }
 let userDetails2={
     name:"Md Kalimullah Ansari",
     Age:32,
     Desgination:"Data Engineer",
     
 }
 let userDetails3={
    name:"Md Hasmatullah Ansari",
    Age:38,
    Desgination:"Genral Mannager",
    
}

 
 //nction borrowingp['
 
 printDeatails.call(userDetails,"delhi","India")   //call
 
 printDeatails.apply(userDetails1,["Bihar","India"])   //apply
 
 //Bind(0)
 
 let newfun=printDeatails.bind(userDetails2,"Rajisthan","India")
 newfun()
 printDeatails.call(userDetails3,"Gujrat","India")   //call
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 