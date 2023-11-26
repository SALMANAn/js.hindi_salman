//Object literal

const user ={
    username:"salman",
    loginCount:  35,
    signedIn:true,

    getUserDetails: function(){
       //console.log("Got user Details form database");
       //console.log(`Username:${this.username}`);
       //console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }

   // return this
}

const userOne=new User("salman",12,true)
const userTwo=new User("ramkumar",112,false)
console.log(userOne.constructor);
//console.log(userTwo);
