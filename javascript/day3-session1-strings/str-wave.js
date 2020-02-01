/* create a function that turns a string into maxican wave.
    Example:
    input: 'hello'
    output: ['Hello','hEllo','heLlo','helLo','hellO']
*/
function strWave(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {

        arr.push(str.slice(0, i).toLowerCase() + str[i].toUpperCase() + str.slice(i + 1).toLowerCase())
    }
    return arr;
}

console.log(strWave('hello'));