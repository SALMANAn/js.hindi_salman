//Higher order function

// 1>forEach
// 2>filter
// 3> map()
// 4> sort()
// 5>reduse()



const  companies=[
    {name:"Google" ,category: "Product Based" ,start: 1981, end: 2004},
    {name:"Amazon" ,category: "Product Based" ,start: 1992, end: 2008},
    {name:"Paytm" ,category: "Servies Based" ,start: 1999, end: 2007},
    {name:"Corforge" ,category: "Servies Based" ,start: 1989, end: 2010},
    {name:"Mindtree" ,category: "Product Based" ,start: 1981, end: 2004}

];

const ages=[10,9.9,9,7,8,9,33,12,20,16,5,34,55,65,76,87,97,12,21,31,];
//console.log(ages);

//forEach
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

companies.forEach(function(company, index){
    console.log(company[index]);
})
companies.forEach(function(company, index){
    console.log(company.category);
})

//companies.forEach((company,index)=(console.log(company.name)))

ages.forEach(function(){
console.log(ages);    
})

//filter
for (let i = 0; i <=ages.length; i++) {
    if (ages[i] <=10) {
      console.log(ages[i]);
    }
}
const age=ages.filter(function(ages){
    if (ages<=20) {
      return true
    }
})
console.log(age);

//Map()
const sb=companies.filter(function(companies){
    if (companies.category=="Servies Based") {
        return true ;   
    }
})
console.log(sb);


const users=[
    {
        id:1,
        name:"Md Salman",
        isActive:true,
        age:20
    },
    {
        id:2,
        name:"Md sarfaraz",
        isActive:true,
        age:23
    },
    {
        id:1,
        name:"Md Saddam",
        isActive:false,
        age:27
    },
    {
        id:1,
        name:"Md Jalauddin",
        isActive:true,
        age:30
    }
];
const names=[];
for (let i = 0; i < users.length; i++) {
    if (users[i].isActive) {
        names.push(users[i].name)
        
    }
}
console.log(names);

//solution 2nd
/*
users.forEach((users)=>{
    if (users[i].isActive) {
        names.push[users.name]
    }
    console.log(users);



}) */
users.forEach((users) =>{
      if(users.isActive){
          names.push[users.names] 
      }
  })
  console.log(names);

//Map()
const name1=users.filter((users)=>users.isActive).map((user)=>user.name)
console.log(name1);




















