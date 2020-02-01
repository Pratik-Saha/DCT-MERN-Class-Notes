const person = {
    name: 'manish',
    city: 'delhi',
    age: 24,
    profession: 'developer'
}

//when a key/prop is stored inside a variable, we access it via [] not the dot operator
const prop = 'name'
console.log(person.prop) //undefined
console.log(person[prop]) //'monish'  || person['name']

//for in - loop to iterate over an object
for (const key in person) {
    console.log(key, person[key])
}