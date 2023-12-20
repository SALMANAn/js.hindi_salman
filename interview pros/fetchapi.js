let p=fetch("https://goweather.herouapp.com/weather/ny")
p.then((value1)=>{
    
    return value1.json()
}).then((value2)=>{
    console.log(value2);
})