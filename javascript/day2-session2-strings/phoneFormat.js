const numbers = '5432112345'

/*function phoneFormat(numbers) {
    //es5
    let str = ''
    str = '(' + numbers.slice(0, 3) + ')'
    str = str + ' '
    str = str + numbers.slice(3, 6)
    str = str + '-'
    str = str + numbers.slice(6)
    return str

    //es6
    const first = numbers.slice(0, 3)
    const second = numbers.slice(3, 6)
    const third = number.slice(6)
    return `(${first}) ${second}-${third}`
}*/

function phoneFormat(numbers) {
    //es5
    let str = ''
    str = '(' + numbers.substr(0, 3) + ')' + ' ' + numbers.substr(3, 3) + '-' +numbers.substr(6,4)
    return str
}

console.log(phoneFormat(numbers)) //'(543) 211-2345'