document.getElementById("btn").addEventListener("click",markerequest)

//Promise Then 
//post data from data
//  function markerequest(e){
//     e.preventDefault()
//     let name=document.getElementById("name").value
//     let job=document.getElementById("job").value


//      console.log("Button Clicked");
//      const myInit={
//         method:'POST',
//          Headers:{
//              'Content-Type':'application/json'
//         },
//         body:JSON.stringify({name:name,job:job})
//      }
//      console.log("Body:",myInit.body);

//      fetch("https://reqres.in/api/users" ,myInit)
//     .then((res)=>{
//          if (!res.ok) {
//              throw Error(res.statusText)   
//         }
//        return res.json()
//     }).then((data)=>{
//          console.log(data)
//         }).catch((error)=>console.log(error))
//     }


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
