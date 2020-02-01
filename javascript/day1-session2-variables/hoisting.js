// var - any variable declared with var gets hoisted at the top of execution or code

console.log(name) //undefined
var name = 'arjun'
console.log(name) //'arjun'

//variable declared with let & const do not get hoisetd
//console.log(city) //ReferenceError : city is not defined
let city = 'bangalore'
console.log(city) //'bangalore'

//console.log(player) ReferenceError : player is not defined
const player = 'sachin'
console.log(player) //'sachin'

