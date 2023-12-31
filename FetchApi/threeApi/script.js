// document.getElementById("btn").addEventListener("click",makerequest)

// // //Single data   || promise Then
// // function makerequest(){
// //     console.log("Hello guys Please wait!");
// //     fetch('https://jsonplaceholder.typicode.com/posts/1')
// //     .then((res)=>{
// //         if (!res.ok) {
// //             throw Error (res.statusText) 
// //         }
// //         return res.json()
// //         console.log(res);
// //     }).then((data)=>{
// //         console.log(data);
// //     }).catch((error)=>{
// //         console.log(error);
// //     })
// // }

// //Promise Then |sigle data in  Browser

// // function makerequest(){
// //     console.log("Unmployee is big Issue");
// //     fetch("https://jsonplaceholder.typicode.com/posts/1")
// //     .then((res)=>{
// //         if (!res.ok) {
// //             throw Error(res.statusText)
// //         }
// //         return res.json()
// //     }).then((data)=>{
// //         console.log(data);
// //         document.getElementById("pid").innerText=data.id
// //         document.getElementById("title").innerText=data.title
// //         document.getElementById("body").innerText=data.body
// //     }).catch((error)=>{
// //         console.log(error);
// //     })
// // }


// //Promise Then |    Multiple data  

// // function makerequest(){
// //     console.log("Thank you!");
// //     fetch("https://jsonplaceholder.typicode.com/posts")
// //     .then((res)=>{
// //         if (res.ok) {
// //             throw error(res.statusText) 
// //         }
// //         return res.json()
// //         console.log(res);
// //     }).then((data)=>{
// //         console.log(data);
// //         data.forEach(element => {
// //            console.log("Id:",element.id); 
// //            console.log("Title:",element.title); 
// //            console.log("body",element.body)
// //         });
// //     }).catch((error)=>{
// //         console.log(error);
// //     })
// // }


// //Promise then \Multiple data showing web Broswer

// // function makerequest(){
// //     console.log("Button Clicked Me!");
// //     fetch("https://jsonplaceholder.typicode.com/posts")
// //     .then((res)=>{
// //         if (!res.ok) {
// //             throw error(res.statusText)
// //         }
// //         return res.json()
    
// //     }).then((data)=>{
// //         //console.log(data);
// //         console.log("Data:",data);
// //         let output=document.getElementById("allpost")
// //         data.forEach(element => {
// //             console.log(element);
// //             output.innerHTML +=`
// //             <div>ID:${element.id}</div>
// //             <div>Title:${element.title}</div>
// //             <div>Body:${element.body}</div><hr>
            
// //             `
// //         });
// //     }).catch((error)=>{
// //         console.log(error);
// //     })
// //}
// //Async await  sigle datas
// // async function makerequest(){
// //      try{
// //          console.log("Button clicked");
// //         const res= await fetch("https://jsonplaceholder.typicode.com/posts/1")
// //         if (!res.ok) {
// //          throw Error(res.statusText)
// //         }
// //         const data=await res.json()
// //         console.log(data);
// //         console.log("ID",data.id);
// //         console.log("Title",data.title);
// //         console.log("Body",data.body);
    
// //      } catch(error){
// //          console.log(error);
    
// //       }
// //      }
// //Async await  maltiple data
// // async function makerequest(){
// //     console.log("Button Clicked");
// //     const res=await fetch("https://jsonplaceholder.typicode.com/posts")
// //     if (!res.ok) {
// //         throw Error(res.statusText)
// //     }
// //     const data=await res.json()
// //     console.log(data);
// //     data.forEach(element => {
// //         console.log("ID",element.id);
// //         console.log("Title",element.title);
// //         console.log("Body",element.body);
// //     })
// // }

// //Async await  maltiple data showing Web broswer

// async function makerequest(){
//     try{
//         console.log("Button Clicked!");
//         const res =await fetch("https://jsonplaceholder.typicode.com/posts")
//         if (!res.ok) {
//             throw Error(res.statusText)
            
//         }
//         const data=await res.json()
//         console.log(data);
//         let output=document.getElementById("allpost")
//        // console.log(allpost);
//        data.forEach(element => {
//         output.innerHTML +=`
//              <div>ID${element.id}</div>
//             <div>ID${element.title}</div>
//             <div>ID${element.body}</div> <hr>`
        
//        });

//     }catch(error){
//         console.log(error);
//     }
// }













































