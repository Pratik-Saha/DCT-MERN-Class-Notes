function  isEven(element,index,numbers){
    return element % 2 == 0
}


function allEvens(numbers){
    //every method in javascript
     return numbers.every(isEven)
}

console.log(allEvens([10,20,30,40])) //true
console.log(allEvens([10,20,33,40])) //false

function someEvens(numbers){
    //some method in javascript
    return numbers.some(isEven)
}

console.log(someEvens([9,11,13,18]))//true
console.log(someEvens([9,11,13,181]))//false

