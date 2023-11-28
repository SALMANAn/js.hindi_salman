const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(Math.PI)
//Math.PI=5
//console.log(Math.PI)
//console.log(descripter);

//const mynewObject=Object.create(null)


const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,

    orderChai:function(){
        console.log("chai na banlow");

    }

}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,"name",{
   //writable:false,
   enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) {
    if(typeof value !=="function")
    console.log(`${key} : ${value}`);
    
}
