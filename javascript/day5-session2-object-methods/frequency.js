/* find count of most frequent item in an array 
write a program to find the count of the most frequent item of an array.

Assume that input is an array of integers
Ex: 
input array: [3,-1,-1,-1,2,3,-1,3,-1,2,4,9,3]
output: 5
Most frequent number in example array is -1
It occurs 5 times in input array
 */
const arr = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]

function frequentItem() {
    const result = {}
    let max = 0, maxNumber = 0
    arr.forEach(function (item) {
        if (result[item]) {
            result[item] += 1
        } else {
            result[item] = 1
        }
    })

    for (const key in result) {
        if (result[key] > max) {
            max = result[key]
            maxNumber = key
        }
    }
    console.log(max)
    console.log('Most frequent number in example array is', maxNumber)
    console.log(`It occurs ${max} times in input array`)
}

frequentItem(arr)