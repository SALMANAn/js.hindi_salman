//let a=20
var c=300 //Globle scope
let a=400
//const b=30
//var c=45
if (true) {
    let a=20
    const b=30
   // var c=45   //scope
   //
   //console.log("INNER: " ,a);  // block scope
}


//console.log(a);
//console.log(b);
//console.log(c);


//nested function

function one(){

    const username="salman"
    function two(){
        const website="youtube"
        console.log(username)
    }
   // console.log(website);

    //two()

}

one()

if (true) {
    const username ="salman"
    if (username=="salman") {
        const website= "  youtube"
        //console.log(username+website);

        
    }
    //console.log(website);
}
//console.log(username);

// +++++++++++++intersting+++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}