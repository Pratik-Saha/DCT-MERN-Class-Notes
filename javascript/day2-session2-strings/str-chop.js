function strChop(str, len) {
    let arr = []
    for (let i = 0; i < str.length; i = i + len) {
        arr.push(str.substr(i, len));
    }
    return arr
}

console.log(strChop('resource', 2)) // [ 're', 'so', 'ur', 'ce' ]
console.log(strChop('resource', 3)) // [ 'res', 'our', 'ce' ]