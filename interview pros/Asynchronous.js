//Async JS Progamming

//callbacks, Promises,Async & Await

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
            let error=true;
            if (error) {
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

//Async &Await

 async function start(){
await createdata({name:"kalamuddin ansari",profession:"softwere engineer"})
getDates()
}
start()