/* add a product into a cart if it does not exists previously
 if it exists then just update the quantity of the product and not push it
*/
const cart = []

function add2Cart(cart, product) {
    if (cart.length == 0) {
        cart.push(product)
    } else {
        const lineItem = cart.find(function (item) {
            return item.id == product.id
        })
        if (lineItem) {
            lineItem.quantity = lineItem.quantity + product.quantity
        } else {
            cart.push(product)
        }
    }
    return cart;
}


const p1 = { id: 1, name: 'marker', price: 10, quantity: 1 }
console.log(add2Cart(cart, p1))

const p2 = { id: 2, name: 'scale', price: 10, quantity: 1 }
console.log(add2Cart(cart, p2))

const p3 = { id: 1, name: 'marker', price: 10, quantity: 1 }
console.log(add2Cart(cart, p3))