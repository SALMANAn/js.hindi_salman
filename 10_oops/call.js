function SetUsername(username){
    //complex DB call 
    this.username=username
    console.log("called");
}
function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email=email,
    this.password=password
}
const chai=new createUser("hp","hp@gmail.com","121abc")
console.log(chai);