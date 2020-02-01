const menuItems = [
    { id: 1, name: 'panner sandwitch', price: 50, isVeg: true },
    { id: 2, name: 'chicken sandwitch', price: 50, isVeg: false },
    { id: 3, name: 'mutton roll', price: 75, isVeg: false },
    { id: 4, name: 'panner roll', price: 60, isVeg: true }
]

/* return only those elements from the array that has isVeg property set to true */
function isVeg(menuItems) {
    const result = menuItems.filter(function (item) {
        return item.isVeg == true
    })
    return result
}

console.log(isVeg(menuItems))

/* search elements in an array based on search term */
function search(menuItems,term){
    const result = menuItems.filter(function(item){
        return item.name.toLowerCase().includes(term.toLowerCase())
    })
    return result
}
console.log(search(menuItems,'sandwitch')) //[{id: 1},{id:2}]
console.log(search(menuItems,'san')) //[{id: 1},{id:2}]