class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const salman=new User("salman")
//console.log(salman.createId())

class Teacher extends User {
    constructor(email,username){
        super(username)
        this.email=email
        
    }
}
const iphone=new Teacher("iphone","i@iphonegmail.com")
//iphone.logMe()
console.log(iphone.createId());