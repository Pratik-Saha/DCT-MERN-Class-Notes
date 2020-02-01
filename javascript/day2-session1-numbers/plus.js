// addition, string concatination
console.log('5' + 10) //'510'
console.log(10 + 10 + '5') //'205'
console.log(10 + '5' + 10) //'10510'
console.log(10 + 10 + '10' + 10) //'201010'
console.log(10 + 10 + Number('10') + 10) //40

/*implicit conversion happens, so we need not to do type conversion for operators other than plus , the same
also holds true for relational operator */
console.log('10'- 2) //8
console.log('10' * 2) //20
console.log('10' / 2) //5

console.log('10' < 20) //true