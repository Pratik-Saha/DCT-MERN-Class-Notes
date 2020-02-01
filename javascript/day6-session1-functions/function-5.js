//let city = 'mysore'
console.log(city) //'mysore'

function print(){
    const name = 'dct' //declared
    city = 'bangalore' //assignment
    console.log(name)
    console.log(city)
}

print() //'dct'
//console.log(name) //referenceError
console.log(city) //'bangalore'
console.log(city) //'mysore'