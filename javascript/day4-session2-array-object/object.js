//ordered, integer indexed, collection of values
const personArr = ['monish', 'delhi', 24, 'developer']
//console.log(personArr[0],personArr[3])

console.log(typeof person) // 'object'
console.log(Array.isArray(personArr)) //true

//unordered,string indexed, collection of values
const person = {
    //key: value
    //property: value
    name: 'manish',
    city: 'delhi',
    age: 24,
    profession: 'developer'
}

// Access an object via dot operator or ['property'] 
console.log(person.name) //'monish'
console.log(person['name']) //'monish'
console.log(person['age']) //24

console.log(typeof person) //'object'
consolelog(Array.isArray(person)) //false