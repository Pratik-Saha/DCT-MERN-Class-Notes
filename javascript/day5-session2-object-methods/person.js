//method is a property of an object whose value is a function

const person = {
    name: 'sujith',
    greet: function(){
        //this - inside a method, this refers to the current object
        return `hi, my name is ${this.name}`
    },
    sayHello: function(name){
        return 'Hi, '+name
    }
}

console.log(person.name)
console.log(person['name'])

console.log(typeof person) //'object'
console.log(person.greet) //[Function: greet]
console.log(person.greet()) //'hi, my name is sujith'

console.log(person.sayHello('ani'))