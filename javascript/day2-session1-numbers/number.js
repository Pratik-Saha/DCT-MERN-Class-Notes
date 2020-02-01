//primitive type - number,string,boolean,undefined

//object - array,object,date -- var numbers = [], numbers.push()

const n1 = 10;
const n2 = 12.6;
const n3 = 11.2;

const x = 4;
const y =2;
const z = -9;

console.log(typeof n1) //'number'
console.log(typeof n2) //'number'

console.log(typeof typeof n1) //'string'

console.log('round operation -  '+Math.round(n2)) //13
console.log(n2) //12.6

console.log('floor operation -  '+Math.floor(n2)) //12
console.log('ceil operation -  '+Math.ceil(n3)) //12

console.log('pi value - '+Math.PI)
console.log('power value - '+Math.pow(x,y)) //16
console.log('square value - '+Math.sqrt(x)) //16
console.log('absolute value - '+Math.abs(z)) //9
console.log('min value - '+Math.min(16,12,99,55,7)) //7
console.log('max value - '+Math.max(16,12,99,55,7)) //99
console.log('random value - '+Math.random())

//console.log(Math.min([10,20,30,5])) //NaN - Not a Number

const n4 = NaN
console.log(typeof n4) //'number'

/*Type conversion in javascript */

const a1 = '10', a2 = '12.8'
console.log(a1 + 5) //'105'

//string to number - two ways - parseInt and parseFloat & Number
console.log(typeof parseInt(a1)) //'number'
console.log(parseInt(a1) + 5) //15

console.log(parseInt(a2)) //12
console.log(parseFloat(a2)) //12.8

console.log(parseFloat(a1)) //10

console.log(Number(a1)) //10
console.log(Number(a2)) //12.8

//number to string - two ways - string constructor method and append empty string
const b1 = 123
console.log(String(b1)) //'123'
console.log(''+ b1) //'123'

const result = Math.min([10,20])
console.log(Number.isNaN(result)) //true
console.log(Number.isNaN(b1)) //false

const task = {
    id : Number(new Date()),
    title : 'check logs before you deploy'
}