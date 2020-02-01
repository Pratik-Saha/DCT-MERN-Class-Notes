let n1 = 10,n2=20 // variable declaration - global scope

function add(){ //function  declaration - function scope
    n1 = 100,n2 =200 //not a variable declaration, only assignment is done
    return n1 + n2
}

console.log(add()) //300
console.log(n1,n2) //100,200