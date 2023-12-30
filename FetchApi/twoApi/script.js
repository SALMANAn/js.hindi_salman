
document.getElementById("btn").addEventListener("click",makerequest)

//Promise data then |Error Handling
// function makerequest(){
//         console.log("Button Clicked");
//             fetch('data.json').then((res)=>{
//                 if (!res.ok) {
//                      throw Error(res.statusText)
//                  }
//                 console.log( "RES:",res);
//                   const dt= res.json()
//                   console.log("DT",dt);
//                   return dt
//             }).then((data)=>{
//                console.log(data);
//                console.log(data.Name);
//                console.log(data.Job);
    
//              })
//              .catch((Error)=>{console.log(Error)})
//            }
    
// Promise Then data Showing Data in Browser


// function makerequest(){
//     console.log("Please wait me!");
//     fetch('data.json').then((res)=>{
//         if (!res.ok) {
//             throw Error(res.statusText)
//         }
//         console.log(res);
//         return res.json()
//     }).then((data)=>{
//         console.log(data);
//         document.getElementById("divdata1").innerText=data.Name
//         document.getElementById("divdata2").innerText=data.Job

//     }).catch((error)=>{
//         console.log(error);
//     })
// }

//Async and Await |Error Handling

// async function makerequest(){
//          try{
//              console.log("Button Click");
//              const res=await fetch("data.json")
//              if (!res.ok) {
//               throw Error(res.statusText)
            
//              }
//             console.log(res);
//              const data=await res.json()
//              console.log(data);
    
//           }catch(Error){
//               console.log(Error);
//           }
//       }

//Async and Await / Showing data in WEb broswer
async function makerequest(){
    try{
        console.log("Please give me Water!");
        const res=await fetch('data.json')
        if (!res.ok) {
            throw Error(res.statusText)
            
        }
        console.log(res);
        const data=await res.json()
        console.log(data);
        document.getElementById("divdata1").innerText=data.Name
        document.getElementById("divdata2").innerText=data.Job

    }catch(Error){
        console.log(Error);
    }
}








