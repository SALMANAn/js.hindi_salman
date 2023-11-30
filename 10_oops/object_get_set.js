const User ={
    _email:"htp@123",
    _password:"abc",


    get email(){
        return this._email.toLocaleUpperCase()
    },
    set email(Value){
        this._email=Value

    }
}
const tea=Object.create(User)
console.log(tea.email);