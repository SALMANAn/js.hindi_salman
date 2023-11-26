function multipleBy5(num){
    return num*5
}
multipleBy5.power=2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username,Score) {
    this.username=username
    this.Score=Score

}
createUser.prototype.increment=function(){
   this.Score++
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.Score}`);
}

const lenovo=new createUser("lenovo v-45",23000)
const hp=createUser("hp- 2023",41000)

lenovo.printMe()