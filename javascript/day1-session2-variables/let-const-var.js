//var - redeclare & re assign

//declare & assign
var name = 'arjun'
console.log(name) 

//re assign
name = 'aman' 
console.log(name) //'aman' 

//re declare
var name = 'sushma'
console.log(name) //'sushma'

//es6 - 2015 - ECMASCRIPT(European Computer Manufacturers Association Script) 6 - Let & const
//let - re assign but not redeclare
let player = 'sachin'

player = 'virat' //resassign
console.log(player) //'virat'

//SyntaxError: Identifier 'player' has already been declared
//let player = 'dhoni'

// const - no re assign and no re declare
const city ='bangalore'

//TypeError: Assignment to constant variable
//city ='mysore'

//SyntaxError: Identifier 'player' has already been declared
//const city ='mysore'