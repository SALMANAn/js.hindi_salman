document.getElementById("btn").addEventListener("click",makerequest)

// //Single data   || promise Then
// function makerequest(){
//     console.log("Hello guys Please wait!");
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((res)=>{
//         if (!res.ok) {
//             throw Error (res.statusText) 
//         }
//         return res.json()
//         console.log(res);
//     }).then((data)=>{
//         console.log(data);
//     }).catch((error)=>{
//         console.log(error);
//     })
// }

//Promise Then |sigle data in  Browser

// function makerequest(){
//     console.log("Unmployee is big Issue");
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res)=>{
//         if (!res.ok) {
//             throw Error(res.statusText)
//         }
//         return res.json()
//     }).then((data)=>{
//         console.log(data);
//         document.getElementById("pid").innerText=data.id
//         document.getElementById("title").innerText=data.title
//         document.getElementById("body").innerText=data.body
//     }).catch((error)=>{
//         console.log(error);
//     })
// }


//Promise Then |    Multiple data  

function makerequest(){
    console.log("Thank you!");
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        if (!res.ok) {
            throw error(res.statusText) 
        }
        return res.json()
        console.log(res);
    }).then((data)=>{
        console.log(data);
        data.forEach(element => {
           console.log("Id:",element.id); 
           console.log("Title:",element.title); 
           console.log("body",element.body)
        });
    }).catch((error)=>{
        console.log(error);
    })
}














