// you want to perform some operation on each element of the array use map method
//map  returns a new array
const numbers = [10, 20, 30]

//c style
function change(numbers) {
    const result = []
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + 5)
    }
    return result
}

console.log(change(numbers)) //[15,25,35]

//js style

function changeJs(numbers) {
    const result = numbers.map(function (n) {
        return n + 5
    })
    return result
}

console.log(changeJs(numbers)) //[15,25,35]