console.log(this) //{}

//inside a arrow function the value of this keyword is the value of the this keyword outside the arrow function(outer scope)
const printThis = () => {
    return this // {}
}

console.log(printThis())

const person = {
    name: 'gita', //
    details: () => {
        //dont make the methods with arraow function
        return this.name //{} , not the current object
    }
}