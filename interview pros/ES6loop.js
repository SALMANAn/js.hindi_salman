//filter, map,forloop,forEach,Sort

const users=[
    { 
        id:1,
        name:"salman",
        isActive:true,
        age:24
    },
    { 
        id:2,
        name:"Sameer",
        isActive:false,
        age:25
    },
    { 
        id:3,
        name:"Akhlakh",
        isActive:true,
        age:26
    },
    { 
        id:4,
        name:"Salahuddin ",
        isActive:false,
        age:24
    }
]
//leval 1 solution

const names=[];
for(i=0; i<users.length;i++){
    if (users.isActive) {
        names.push(users(i).name)
    }
}
console.log(names);

//leval 2 solution

users.forEach((users)=>{
    if (users.isActive) {
        names.push(users.name) 
    }
})
console.log(names);

//map()
//filter
 const name1=users.filter(user=>user.isActive).map((user)=>user.name)
 console.log("name1",name1);

 //sort
 let numbers=[1,2,3,4,5,6,7,89,10,11,12.13,15]
 numbers.sort(function(a,b){
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
 })
 console.log(numbers);

 users.sort((user1,user2)=>user1.age<user2.age ? -1:1)
 console.log(users);






