/*
function outerfunction(){
    let outerfunction="I am Outer Function";


    function innerfunction(){
        console.log(outerfunction);
    }
    return innerfunction
}
let clouserfunction=outerfunction()
clouserfunction()
*/

function Welcome(name){
    var greetingInfo=function(message){
        console.log(message + " "+ name);
    }
    return greetingInfo;
}
var myfunction=Welcome("sallu")
myfunction("Welcome");
myfunction("Hello Mr");

let heroPower={
    thor:"hammer",
    spiderman:"Sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.salman=function(){
    console.log(`Salman is present in all objects`);
}
Array.prototype.heySalman=function(){
    console.log(`Salman says hello `);
}