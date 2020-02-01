function removeEle(values, ele) {
    let result = []
    for (let i = 0; i < values.length; i++) {
        if (values[i] != ele) {
            result.push(values[i])
        }
    }
    return result
}

console.log(removeEle([10, 20, 30, 40, 50], 30)) //[ 10, 20, 40, 50 ]