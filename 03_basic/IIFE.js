(function chai(){
    console.log('DB connected')
}());

( function chaiaur() {
    console.log("db connected Two");
} )();

( (name) => {
    console.log("db connected Two $(name");
} )("salman")