//Date
let myDate=new Date()
console.log(myDate)


console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getTimezoneOffset());
console.log(myDate.toString());
console.log(typeof myDate);
//let myCreatedDate=new Date (2023,0,23)
//let myCreatedDate=new Date (2023,0,23,5,3)

//console.log(myCreatedDate);
//console.log(myCreatedDate.toDateString());
//let myCreatedDate=new Date ("208/23-01-14")
//console.log(myCreatedDate.toLocaleString())
//console.log(myCreatedDate.toLocaleDateString())
//console.log(myCreatedDate.toJSON())
let myCreatedDate= new Date ("01-14-2023")
//console.log(myCreatedDate.toLocaleString());
let myTimeStamp=Date.now()
//console.log(myTimeStamp)
//console.log(myCreatedDate.getTime());
myDateStamp=Date.now()
console.log(myDateStamp)
//-console.log(myCreatedDate.gtTime())
console.log(Math.floor(Date.now()/1000))

let newDate=new Date() 
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay()-1)
newDate.toLocaleString("default",{
    weekday:"long"
    
}

)







