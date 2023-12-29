document.getElementById("Submit").addEventListener("click",makerequest)
// function makerequest(){
//     console.log("clicked button");
//     const promisObj=fetch("data.txt")
//     console.log(promisObj);
//     promisObj.then((res)=>{
//         console.log(res);
//         return res.text()
//     }).then((data)=>{
//         console.log(data);
//     })
// }

//showing dATa in console
// function makerequest(){
//     console.log("Clickme Salman");
//     fetch("data.txt")
//     .then((res)=>{
//         console.log(res);
//         return res.text()
//     }).then((data)=>{
//         console.log(data)
//     })
// }

//Promise data then |Error Handling

// function makerequest(){
//     console.log("Be Comment");
//     fetch("data1.txt").then((res)=>{
//         if (!res.ok) {
//             throw Error(res.statusText)  
//         }
//         console.log(res);
//         return Text()
//     }).then((data)=>{
//         console.log(data);
//     }).catch((error)=>{
//         console.log(error);
//     })
// }

//Promise data then showing data in broswer

// function makerequest(){
//     console.log("Button Clicked");
//     fetch("data.txt").then((res)=>{
//         if (!res.ok) {
//             throw error(res.statusText)
//         }
//         console.log(res);
//         return res.text()
//     }).then((data)=>{
//         console.log(data);
//         document.getElementById("divdata").innerText=data
//     }).catch((error)=>{
//         console.log(error);
//     })
// }


// //Async and await
// async function makerequest(){
//    console.log("Button Click");
//    const res= await fetch("data.txt")
//    console.log(res);
//    const data=await res.text()
//    console.log(data);
// }


//Async and Await // error handaling

//  async function makerequest(){
//      try{
//         console.log("Button Click");
//         const res=await fetch("data1.txt")
//         if (!res.ok) {
//          throw Error(res.statusText)
//         }
//         console.log(res);
//        const data=await res.text()
//         console.log(data);

//      }catch(ERROR){         
//         console.log(Error);
//      }
//     }

    //ASYNc and await| Showing data in web broswer

    async function makerequest(){
        try{
            console.log("Please Wait!");
            const res=await fetch("data.txt")
            if (!res.ok) {
                throw Error(res .statusText)   
            }
            console.log(res);
            const data=await res.text()
            console.log(data);
            document.getElementById("divdata").innerText=data

        }
        catch(error){
            console.log(error);

        }
    }





















