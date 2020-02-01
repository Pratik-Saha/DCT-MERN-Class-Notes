const fruits = ['apple','mango','kiwi']

function buildObj(fruits){
    const result = {}
    fruits.forEach(function(fruit){
        result[fruit] = fruit.length
    })
    return result
}
console.log(buildObj(fruits)) //{ apple: 5, mango: 5, kiwi: 4 }