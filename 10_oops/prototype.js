//let myName="Salman   "
//let Mychenal="sallu_tech"
//console.log(myName);
//console.log(myName.trim().length);
//console.log(myName.truelength());

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"Sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.salman=function(){
    console.log(`Salman is present in all objects`);


}
Array.prototype.heySalman=function(){
    console.log(`Salman says hello `);
}
//heroPower.salman()
myHeros.salman()
myHeros.heySalman()
//heroPower.heySalman()


//inheritance
const User={
    name:"salman",
    email:"sal12@gmail.com"
}

const Teacher={
    makeVideo:true
}
const TeachingSupport ={
    isAvailable:false
}
const TASupport={
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:TeachingSupport

}
Teacher.__proto__=User

//Modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="lemonTea  "
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`);
}
anotherUsername.truelength()
"salman".truelength()
"pandeji".truelength()
