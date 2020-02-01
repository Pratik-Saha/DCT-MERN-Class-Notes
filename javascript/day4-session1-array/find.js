const numbers = [10, 20, 30, 40, 50]
// when you want to do a equality check while finding an element in an array follow includes and index of
console.log(numbers.includes(30)) //true
console.log(numbers.includes(35)) //false

console.log(numbers.indexOf(30)) //2
console.log(numbers.indexOf(35)) //-1

console.log(numbers.indexOf(30) >= 0) //true
console.log(numbers.indexOf(35) >= 0) //false

//find based on a condition 
//find based on a property of an object

//c style of programming
//find the first element in the array that is greater than 25
// if exists then return that number else return undefined
function findEle(numbers, value) {
    let result
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            result = numbers[i]
            break
        }
    }
    return result
}

console.log(findEle(numbers, 25)) //30
console.log(findEle(numbers, 250)) //undefined

//js style programming
//find() method takes a callback function as an argument and return the very first element that matches the given condition
function findEleJs(numbers, value) {
    const result = numbers.find(function (n) {
        return (n > value) && (n % 2 == 0)
    })
    return result
}