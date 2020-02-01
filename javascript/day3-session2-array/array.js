//Array is an ordered, integer indexed, collection of values
const p1 = 'sachin', p2 = 'virat', p3 = 'shewag'
console.log(p1) //'sachin'
console.log(p3) //'shewag'

const players = ['sachin', 'virat', 'shewag', 'rahul']
console.log(players[0]) //'sachin'
console.log(players[2])

//last element in an array or string will always be length-1 
console.log(players.length)
console.log(players[players.length - 1]) //'rahul'

console.log(typeof players) //'object'

/*type of array and object both are object type so to differentiate between array and object we can use 
Array.isArray() method to check whether a variable holding array or not
Array.isArray() returns true if it is an array else returns false */
console.log(Array.isArray(players)) //true

const article = {
    title: 'javascript',
    author: 'jack'
}

console.log(typeof article) //'object'
console.log(Array.isArray(article)) //false

//in javascript if you want to access a item out of the scope of the array then it will return undefined
console.log(players[10]) //undefined