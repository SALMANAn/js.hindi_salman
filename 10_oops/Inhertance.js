class User {
    construtor (username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    construtor(username,email,password){
       // super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai=new Teacher("chai","googlr@gmail.com","1234")
chai.addCourse()
chai.logMe()
const masalachai=new User("masalachai")
masalachai.logMe()
console.log(chai instanceof User);
