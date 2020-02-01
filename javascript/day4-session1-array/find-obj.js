const products = [
    { id: 1, name: 'marker' },
    { id: 2, name: 'scale' }
]

function findProduct(products, id) {
    const product = products.find(function (item) {
        return item.id == id
    })
    return product
}

console.log(findProduct(products, 1))
console.log(findProduct(products, 100))

//even though we are doing equality check we have to  use find method becacuse the elements in the array are
//not primitive type . its object type