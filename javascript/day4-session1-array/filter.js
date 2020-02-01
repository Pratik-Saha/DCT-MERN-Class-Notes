// to find all the elements that satisfy a given condition use filter method - return type always array
// to find only the first element that satisfy a given condition use find method


//find all elements greater than 25

// c style programming
const numbers = [10, 20, 30, 40, 50]
function filterEle(numbers, value) {
    const result = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            result.push(numbers[i])
        }
    }
    return result
}

console.log(filterEle(numbers, 25)) //[30,40,50]
console.log(filterEle(numbers, 250))

//js style programming
function filterEleJs(numbers, value) {
    // const result = numbers.filter(function(n){
    //     return  n>value
    // })
    // return result
    return numbers.filter(function (n) {
        return n > value
    })

}

console.log(filterEleJs(numbers, 25)) //[30,40,50]
console.log(filterEleJs(numbers, 250))//[]
