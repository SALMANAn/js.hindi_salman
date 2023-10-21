const marvel_heros=["thar","spiderman","Ironman"]
const dc_heros=["superman","Flashman","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros)
//console.log(marvel_heros[3][1])

//marvel_heros.concat(dc_heros)
//console.log(marvel_heros)

//const allheros=marvel_heros.concat(dc_heros)
//console.log(allheros)
//const new_allheros=[...marvel_heros,...dc_heros]
//console.log(new_allheros)
const another_array=[1,2,3, [5,5,6],7, [6.7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("salman"))
console.log(Array.from("salman"))
console.log(Array.from({Name: "salman"})) //interview

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))



