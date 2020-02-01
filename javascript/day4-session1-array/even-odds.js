const numbers = [10, 15, 20, 25, 30]

function evenOdds(numbers) {
    let totalArr = []
    const evenArr = numbers.filter(function (number) {
        return number % 2 == 0
    })

    const oddArr = numbers.filter(function (number) {
        return number % 2 != 0
    })

    totalArr.push(evenArr, oddArr)
    return totalArr
}

console.log(evenOdds(numbers)) //[ [ 10, 20, 30 ], [ 15, 25 ] ]