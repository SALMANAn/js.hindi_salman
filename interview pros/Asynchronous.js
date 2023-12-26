//Async JS Progamming

//callbacks, Promises,Async & Await
/*
//problem create
 const datas=[
    {name:"Md Salman Ansari",Profession:"Softwere Engineer"},
    {name:"Md Rizwan Ansari",Profession:"Bank Mannager"}
 ];
 function getDates(){
    setTimeout(()=>{
        let output=""
        datas.forEach((datas,index)=>{
            output+=`<li>${datas.name}</li>`
        })
        document.body.innerHTML=output

    },1000)
 }

function createdata( newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newdata)
            let error=false;
            if (!error) {
                resolve();
            }else{
                reject("this is reject")
            }
        },2000)
    })
 }
 //getDates()
 /*
 createdata({name:"kalamuddin ansari",profession:"softwere engineer"})
 .then(getDates)
 .catch(error =>console.log(error))
*/
/*
//Async &Await

async function start(){
await createdata({name:"kalamuddin ansari",profession:"softwere engineer"})
getDates()
}
start()

*/
/*
const greet=(count)=>{
    for(let i=0;i<count; i++ ) console.log("hello world");
}
greet(3)
*/
/*
const sqare=(num)=>{
   return num*num
}
//callback function
function greet(name, callback){
    console.log("hello"+" "+name);
    callback()
}
greet("salman",callback)
*/

// callback function
const calculate=(a,b,opration)=>{
    return opration(a,b);
};
const result=calculate(13,41,function(num1,num2){
    return num1+num2;
})
console.log(result);
// Promise  than catech finally async, await 

 const ticket =new Promise(function(resolve,reject){
    const isBoarded=false;
    if (isBoarded) {
        resolve("you are  in the Way flight")
    }else{
        reject("You are flight has been cancelled")
    }
 })
ticket.then((data)=>{
    console.log("whoo", data);
}).catch((data)=>{
    console.log("wohh no!", data);
}).finally((data)=>{
    console.log("you are not gooing to Home twon");
})

function getCheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese="cheese"
           resolve(cheese)
            //reject("cheese in no aviable")
        },2000)
    })
}

function makeDough(Dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const Dough=cheese+"Dough"
            resolve(Dough)
        },2000)
    });
}
function makeDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const Dough=cheese+"Dough"
            resolve(Dough)
           // reject("oo no avilable")
        },2000)
    });
}
function bakePizza(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const Pizza="Pizza"
            resolve(Pizza)
            //reject(Pizza)

        },2000)
    });
}
/*
getCheese()
.then((cheese)=>{
    console.log("Here is the cheese",cheese);
}).catch((data)=>{
    console.log(("sorry",data));
}).finally(()=>{
    console.log(" aree jhatu nhi hai");
})

makeDough()
.then((Dough)=>{
    console.log("Here is the dough aviable",Dough);
},1000)
.catch((Dough)=>{
    console.log("kia karu bhai", Dough);
})
.finally((Dough)=>{
    console.log("Sorry boss",Dough);
})
bakePizza()
.then((Pizza)=>{
    console.log("Pizza hai bhai",Pizza);
}).catch((Pizza)=>{
    console.log("sorry bhai pizza nhi hai",Pizza);
}).finally((Pizza)=>{
    console.log( "app ja sakte hai ");
})
*/
getCheese()
.then((cheese) => {
   console.log("here is the cheese", cheese);
   return makeDough(cheese);
})
.then((dough) => {
    console.log("here is the dough", dough);
   return bakePizza(dough);
})
.then((pizza) => {
   console.log("here is the pizza", pizza);
})
.catch((data) => {
   console.log("error occured", data);
})
.finally(() => {
   console.log("Process ended");
});

async function orderPizza() {
    try {
        const cheese = await getCheese();
        console.log("here is the cheese", cheese);

        const dough = await makeDough(cheese);
        console.log("here is the dough", dough);

        const pizza = await bakePizza(dough);
        console.log("here is the pizza", pizza);
    } catch (err) {
        console.log("error occured", err);
    }
    console.log("Process ended");
}

orderPizza();