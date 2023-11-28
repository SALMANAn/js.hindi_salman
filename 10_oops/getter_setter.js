class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return  this._email.toUpperCase()
    }
    set email(Value){
        this._email=Value
    }

    get password(){
        return `${this._password}Raji`
    }
    set password(Value){
        this._password=Value

    }
}
const salman=new User("salmanstm@gmail.com","salman121")
console.log(salman.email);