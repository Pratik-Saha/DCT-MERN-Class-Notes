function camelCase(str) {
    let result = ''
    let arr = str.split('_');
    result = result + arr[0]
    for (let i = 1; i < arr.length; i++) {
        result = result + arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
    }
    return result;
}

console.log(camelCase('javascript_is_awesome')) //'javascriptIsAwesome'