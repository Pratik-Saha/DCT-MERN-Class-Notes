console.log(this) //outside a function this refers to a empty object {}

function printThis(){
    console.log(this) //inside a function this refers the global object
}

printThis()

const person = {
    name: 'rajesh',
    details: function(){
        return this //inside a method this refers the current object
    }
}

function showThis(){
    console.log(this)
}