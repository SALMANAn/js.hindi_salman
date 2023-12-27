/*
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
 
//  printDeatails.call(userDetails,"delhi","India")   //call
 
//  printDeatails.apply(userDetails1,["Bihar","India"])   //apply
 
//  //Bind(0)
 
//  let newfun=printDeatails.bind(userDetails2,"Rajisthan","India")
//  newfun()
//  printDeatails.call(userDetails3,"Gujrat","India")   //call
*/
/*
 const employee1={firstName:"john",lastName:"Randoson"};
 const employee2={firstName:"Kenwel",lastName:"Pollard"};
 function invite(greeting1,greeting2){
    console.log(
       greeting1+ " "+ this.firstName+" "+ this.lastName+","+greeting2
    );
    console.log(
        greeting2+ " "+ this.firstName+" "+ this.lastName+","+greeting1
     );

 }


 invite.call(employee1,"Hello","How are you");
 invite.call(employee2,"Hello","How are you");

 invite.call(employee1,["Hello","who are you"]);

*/
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?



var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);

inviteEmployee1("Hello", "How are you?"); 
inviteEmployee2("Hello", "How are you?"); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 