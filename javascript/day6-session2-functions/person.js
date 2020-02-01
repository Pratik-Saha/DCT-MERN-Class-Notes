//craete a constructor function called Person
// 2 properties - firstName,LastName
//2 methods - fullName,greet
function Person(firstName, SecondName) {
    this.firstName = firstName,
        this.SecondName = SecondName,
        this.fullName = function () {
            return `${this.firstName} ${this.SecondName}`
        },
        this.greet = function (name) {
            return `hello ${name}`
        }
}

const p1 = new Person('nikhil', 'da')
console.log(p1.fullName()) //'nikhil da'

console.log(p1.greet('ani')) //'hello ani'