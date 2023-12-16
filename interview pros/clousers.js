function outerfunction(){
    let outerfunction="I am Outer Function";


    function innerfunction(){
        console.log(outerfunction);
    }
    return innerfunction
}
let clouserfunction=outerfunction()
clouserfunction()
