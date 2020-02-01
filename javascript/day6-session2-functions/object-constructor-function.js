//similar to the class in java to create objects of similar user defined data type, js provides costructor function
//define all the property and method inside the constructor function like class in java
// and instantiate the constructor function using new keyword like  we do for class in java
//that will return an object of the type of the name of the constructor function - Player {}
//then each time u instatntiate the function a new object wil be created that will hold all the property present inside the constructor function
// this keyword inside constructor function refers to current object

function Player(name, runs) { //name- capital- pascal casing
    this.name = name
    this.runs = runs
    //methods inside a function is instance method or bject level method
    this.avg = function () {
        let total = 0
        this.runs.forEach(function (run) {
            total += run
        })
        return total / this.runs.length
    }
    this.totalMatches = function () {
        return this.runs.length
    }

}
//methods declared outside the function is static method or class level method
Player.staticMathod = function(){
    return `this is a static method`
}

console.log(Player()) //undefined
console.log(new Player()) // Player {} - an empty of PLayer type

const p1 = new Player('sachin', [40, 60, 50])
console.log(p1.name, p1.avg(), p1.totalMatches())

const p2 = new Player('virat', [60, 100, 120])
console.log(p2.name, p2.avg(), p2.totalMatches())

const p3 = new Player('dhoni', [50])
console.log(p3.name, p3.avg(), p3.totalMatches())

//const arr = [] || new Array()
//const obj  = {} || new Object()