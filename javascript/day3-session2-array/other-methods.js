const fruits = ['apple', 'mango', 'kiwi']

console.log(fruits.indexOf('mango')) //1
console.log(fruits.indexOf('banana')) //-1

console.log(fruits.includes('mango')) //true
console.log(fruits.slice(1)) //['mango', 'kiwi']
console.log(fruits.slice(1, 2)) //['mango']
console.log(fruits.join(', ')) // 'apple, mango, kiwi'
console.log(fruits)

//concatinaton of two array
const n1 = [10], n2 = [20]
console.log(n1 + n2) //'1020'

//concat method returns a new array
console.log(n1.concat(n2)) //[10, 20]
console.log(n1)