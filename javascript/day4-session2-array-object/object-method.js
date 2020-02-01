const person = {
    name: 'manish',
    city: 'delhi',
    age: 24,
    profession: 'developer'
}

//add a new key value pair
person.gender = 'male'
person['skill'] = ['js', 'rb', 'py']
console.log(person)

//read value
console.log(person.name)
console.log(person['city'])

//update value
person.name = 'Danish'
console.log(person)

//remove key value pair
delete person.age
console.log(person)

console.log(Object.keys(person)) // return array of keys in object
console.log(Object.values(person)) // return array of values in object

//check if key is present
console.log(person.hasOwnProperty('name')) //true
console.log(person.hasOwnProperty('experience')) //false

console.log(Object.keys(person).includes('name')) //true

//check if value is present
console.log(Object.values(person).includes('delhi')) //true

//check if an object is empty or know count of key value pairs
console.log(person.length) //undefied
console.log(Object.keys(person).length) //4