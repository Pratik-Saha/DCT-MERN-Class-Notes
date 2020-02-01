//higher order function - a function that takes function as an argument or return a function as a value
// callback - a function that is passed as an argument to the other function 
//functions are treated as first class citizens

// function success(n){
//     console.log('even',n)
// }

// function failure(n){
//     console.log('odd',n)
// }


function printNumber(success,failure){
    console.log(success,failure)
    setTimeout(() => {
        const random = Math.round(Math.random() * 10)
        if(random % 2 == 0){
            success(random)
        }
        else{
            failure(random)
        }
    }, 2500)
}

printNumber(success,failure)

// printNumber((n) => {
//     console.log('even', n)
// }, (err) => {
//     console.log('odd', err)
// })

// for(let i =0;i < 100;i++){
//     console.log(i)
// }