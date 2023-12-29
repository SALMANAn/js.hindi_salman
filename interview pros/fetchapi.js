/*
let p=fetch("https://goweather.herouapp.com/weather/ny")
p.then((value1)=>{
    
    return value1.json()
}).then((value2)=>{
    console.log(value2);
})
*/
let promise = new Promise(function (resolve, reject) {
	const x = "geeksforgeeks";
	const y = "geeksforgeeks"
	if (x === y) {
		resolve();
	} else {
		reject();
	}
});

promise.
	then(function () {
		console.log('Success, You are a GEEK');
	}).
	catch(function () {
		console.log('Some error has occurred');
	});



let promies=new Promise(function(resolve, reject){
    //resolve("Salman is back")
    reject("kuch bhi")
})
promies
.then((SuccessMessage)=>{
    console.log(SuccessMessage);
}).catch((data)=>{
    console.log("back to back",data);
}).finally((SuccessMessage)=>{
	console.log("kaho na pyar hota hai");
})