const numbers = [10,15,20]

//es5
const result = numbers.filter(function(ele){
    return ele % 2 == 0
})
console.log(result)

//es6 - arrow function
const result1 = numbers.filter(ele => ele %2 == 0)
console.log(result1)

console.log(numbers.filter(ele => ele %2 == 0))
console.log(numbers.map(ele => ele + 5))