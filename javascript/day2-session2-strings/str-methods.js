const name = 'arjun';
console.log(name.length) //5
console.log(name.toUpperCase()) //'ARJUN'
console.log(name) //'arjun'
console.log(name.toLowerCase()) //'arjun'

//extract - slice
console.log(name.slice(0, 3)) //'arj'
console.log(name.slice(3)) //'un'

//capitalize a word
//Arjun

console.log(name[0].toUpperCase() + name.slice(1).toLowerCase()) //'Arjun'

console.log(name.indexOf('r')) //1
console.log(name.indexOf('z')) //-1

console.log(name.includes('a')) //true
console.log(name.includes('z')) //false

console.log(name.indexOf('r') >= 0) //true
console.log(name.indexOf('z') >= 0) //false

const city = 'bangalore'

console.log(city.indexOf('a')) //1 - indexof traverse left to rigt
console.log(city.lastIndexOf('a'))//4 - lastIndexOf traverse right to left

// if char is present only once in a string
console.log(city.indexOf('g') == city.lastIndexOf('g')) //true
console.log(city.indexOf('a') == city.lastIndexOf('a')) //false

console.log(city.charAt(2)) //'city[2]' //'n'
