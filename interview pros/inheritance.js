class user{
    constructor(username){
        this.username=username
    }
    logME(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class  Teacher extends user{
    constructor(username,email,passwword){
        super (username)
        this.email=email
        this.passwword=passwword
    }
    addCourse(){
        console.log(`A course was added by ${this.username} `);
    }
}
const salman=new Teacher("salman bhai","salmanstm121@gmail.com","sam121")
console.log(salman);
salman.addCourse()
salman.logME()

const dalchini=new user("dalchini")
dalchini.logME()
//dalchini.addCourse()
console.log(salman instanceof user);