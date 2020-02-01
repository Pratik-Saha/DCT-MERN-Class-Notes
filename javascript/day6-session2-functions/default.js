//setting default values for parameters passed to a function
//es5
function add(n1, n2) {
    n1 = typeof n1 == 'undefined' ? 0 : n1
    n2 = typeof n2 == 'undefined' ? 0 : n2
    console.log(n1, n2)
    return n1 + n2
}

console.log(add())
console.log(add(10))
console.log(add(10, 20))

//es6
function sum(n1 = 0, n2 = 0) {
    console.log(n1, n2)
    return n1 + n2
}

console.log(sum())
console.log(sum(10))
console.log(sum(10, 20))