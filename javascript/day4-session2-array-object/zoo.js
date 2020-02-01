const myZoo = [
    ["King Kong", ["gorilla",42]],
    ["Nemo", ["fish",5]],
    ["Phil",["grounding",11]]
]

// console.log(myZoo[0]) //[ 'King Kong', [ 'gorilla', 42 ] ]
// console.log(myZoo[0][0]) // King Kong
// console.log(myZoo[0][1]) // [ 'gorilla', 42 ]
// console.log(myZoo[0][1][0]) // gorilla
// console.log(myZoo[0][1][1]) //42

function zooInventory(myZoo){
    const result = []
    for(let i=0;i<myZoo.length;i++){
        const str =`${myZoo[i][0]} the ${myZoo[i][1][0]} is ${myZoo[i][1][1]}`
        result.push(str)
    }
    return result
}

function zooInventoryWithMap(myZoo){
    const result = myZoo.map(function(item){
        return `${item[0]} the ${item[1][0]} is ${item[1][1]}`
    })
    return result
}

console.log(zooInventory(myZoo))
console.log(zooInventoryWithMap(myZoo))