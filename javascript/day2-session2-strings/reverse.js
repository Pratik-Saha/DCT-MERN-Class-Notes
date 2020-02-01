//reverse a string - approach 1
/*function reverseStr(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        result = str[i] + result;
    }
    return result;
}*/


console.log(reverseStr('bangalore')) //'erolagnab'

/*reverse a string - approach 2
there is no inbuilt reverse method exist for string in javascript
so in another way we can first convert the string into array using split('') method
then a reverse() method exists for array to reverse the elements of array
then we can convert a array into a string using join('') method */
console.log('dct'.split('').reverse().join('')) //'tcd'


//reverse a string - approach 3
function reverseStr(str) {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result = str[i] + result;
    }
    return result;
}
