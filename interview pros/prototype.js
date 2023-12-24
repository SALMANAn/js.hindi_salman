function person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
person.prototype.fullName=function(){
    return this.firstName + " " + this.lastName;
}
let zishan=new person("zishan","Ansari")
console.log(zishan.fullName());



// Object 
/*
const obj=new Object({
    name:"salman"
})
const objc={
    name:"salman ansari"
}
const objce={
    name:"Md salman ansari"
}*/
const obj={
    name:"Salman Ansari",
    getName:function(){
        return this.name
    },
    getRoll:function(){
        return this. roll

    }
}
console.log(obj.getName());
const obj2={
    rollno:12,
    name:"Salman",
    __proto__:obj
}
console.log(obj2);

const obj3={
    class:"b-tech",
    __proto__:obj2
}
console.log(obj3.getName());


const array=["Salman Ansari"]
console.log(array);

const object=["Salman Ansari"]
console.log(object);

Array.prototype.show.function(){
    return this;
}
const cities=["Delhi"]
console.log(cities.show());
/*
//Array.prototype.covertIntoObject=function(){
    let newobject={}
    this.Array.forEach(element => {
        newobject[element]=element
    });
    return newobject()
        
    }
console.log(cities.covertIntoObject());
*/


function MyPrototype(name){
    this.name=name
}
MyPrototype.prototype=obj
const myproto=new MyPrototype("Salman");
console.log(myproto.getNam