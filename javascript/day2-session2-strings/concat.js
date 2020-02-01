const source = 'bangalore', destination = 'mysore', distance = '145', timeTaken = '3 hours 30 min'

function formatDistance(source, destination, distance, timeTaken) {
    //es5
    //return 'The distance between ' + source + ' and ' + destination + ' is ' + distance + ' kms and the time taken to travel is ' + timeTaken + '.'

    //es6 - template string || template literal || string literal
    return `The distance between ${source} and ${destination} is ${distance} kms and the time taken to travel is ${timeTaken} .`
}

console.log(formatDistance(source, destination, distance, timeTaken))