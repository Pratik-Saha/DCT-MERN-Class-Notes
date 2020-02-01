let n1 = 10, n2 = 20

function add() {
    //here n1 and n2 have been declared within the function
    let n1 = 100, n2 = 200
    return n1 + n2
}

console.log(add()) //300
console.log(n1, n2) //10,20