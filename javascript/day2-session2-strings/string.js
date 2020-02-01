//string - primitive
const source = 'bangalore';

console.log(source);
console.log(source[0]); //'b'
console.log(source[1]) //'a'

//accessing every chars in the string
//for loop
for (let i = 0; i < source.length; i++) {
    console.log(source[i].toUpperCase())
}

//es6 - for of - for of works for both strings & arrays
for (const char of source) {
    console.log(char)
}

// forEach is used to loop over an array and it can not be used with a string
//source.forEach() -  error - forEach() is not a function

console.log(source.split(''))
//so to loop over a string using forEach() first we need to convert the string into a array using split function 
source.split('').forEach(function (char, i) {
    console.log(i, char)
})

// to loop over an object we use for in
