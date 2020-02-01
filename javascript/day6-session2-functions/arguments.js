//javascript provides a special object called arguments object that has all the arguments passed to the function and unlike the regular object this argument object has the length property

//console.log(arguments)

function add(){
    console.log(arguments,arguments.length)
    console.log(arguments['0'])
    console.log(Object.keys(arguments))
    let total = 0
    for(let i = 0;i<arguments.length;i++){
        total += arguments[i]
    }
    return total
}

console.log(add(10)) //10
console.log(add(10,20,30)) //30

const numbers = []
numbers.push(10)
numbers.push(10,20,30,40,50)