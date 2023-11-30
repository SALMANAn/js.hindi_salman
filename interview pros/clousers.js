function abcd(){
    var x=12
    return function (){
        console.log(x);

    }
}
abcd(x)