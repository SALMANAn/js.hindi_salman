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