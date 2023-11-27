//class user{
   // constructor(username,email,password){
     //   this.username=username;
     //   this.password=password;
     //   this.email=email

   // }
   // encryptPassword(){
    //    return `${this.password}abc`
   // }
   // chnageUsername(){
     //   return `${this.username.toUpperCase()}`
    //}

//}
//const hp=new user("hp","hp@gmail.com","123")
//console.log(hp.encryptPassword());
//console.log(hp.chnageUsername());
// behand the sen
function User(username, email,password){
        this.username=username;
        this.password=password;
        this.email=email

}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.chnageUsername=function(){
    return ` ${this.username.toUpperCase()}`
}
const vivo=new User("vivo","vivo@gmail.com","123")
console.log(vivo.encryptPassword());
console.log(vivo.chnageUsername());













