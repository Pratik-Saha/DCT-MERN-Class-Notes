console.log(add(5, 5))
//function declaration
//function declaration gets hoisted
//function - keyword
//add - function name
//n1,n2 - parameters to the function
//return keyword is used to return a value from a function, if we dont use return the return keyword, by default undefined is returned
function add(n1, n2) {
    return n1 + n2
}

//add(10,20) - calling a function / invoking a function
//10,20 - are arguments
//n1 =10,n2 = 20
console.log(add(10, 20))


//function expression
//dont get hoisted irrrespective of declared with var,let or const keyword

//console.log(total) //undefined
//console.log(total()) //err
//var total = function(n1,n2){

//}
//console.log(total)

const total = function (n1, n2) {
    return n1 + n2
}

console.log(total(10, 35))