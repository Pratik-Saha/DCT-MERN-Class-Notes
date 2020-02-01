const count = {
    value: 0,
    up: function(){
        this.value += 1
        return this.value
    },
    down: function(){
        this.value -= 1
        return this.value
    },
    reset: function(){
        this.value = 0
        return this.value
    },
    incrementBy: function(n){
        this.value += n
        return this.value
    },
    decrementBy: function(n){
        this.value -=n
        return this.value
    }
}

console.log(count.up()) //1
console.log(count.up()) //2
console.log(count.down()) //1
console.log(count.reset()) //0
console.log(count.incrementBy(10)) //10
console.log(count.decrementBy(3)) //7