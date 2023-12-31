document.getElementById("btn").addEventListener("click",makerequest)
//Promise and Then
// function makerequest(){
//     console.log("Please Give me Water");
//     const myInit={
//         method:"POST",
//         Headers:{
//             'Content-Type':'application/json'
//         },
//         body:`{"Name":"Md Salman Ansari","Job":"Fornt End Developer"}`
//     }
//     fetch("https://reqres.in/api/users",myInit)
//     .then((res)=>{
//         if (!res.ok) {
//             throw Error(res.statusText)
//         }
//         return res.json()
//     }).then((data)=>{
//         console.log(data);
//     }).catch((error)=>{
//         console.log(error);
//     })

// }
//post data
//  function makerequest(){
//     console.log("Button Clicked");
//      const myInit={
//          method:'POST',
//          Headers:{
//              'Content-Type':'application/json'
//          },
//          body:'{"name":"Md Salman","job":"Web developer"}'
//      }

//     fetch("https://reqres.in/api/users" ,myInit)
//      .then((res)=>{
//          if (!res.ok) {
//              throw Error(res.statusText)
            
//          }
//          return res.json()
//      }).then((data)=>{
//          console.log(data)
//      }).catch((error)=>console.log(error))
//  }

//Async and Awite
async function markerequest(){
    try{
        console.log("Button Clicked");
        console.log("Button Clicked");
    const myInit={
        method:'POST',
        Headers:{
            'Content-Type':'application/json'
        },
        body:'{"name":"Md Salman","job":"Web developer"}'
    }

   const res =await fetch("https://reqres.in/api/users" ,myInit)
   if (!res.ok){
    throw Error(res.statusText)
   }
   const data=await res.json()
   console.log(data);
    }catch(error){
        console.log(error);
    }
}