//print numbers from 1 - 100
//if a number is divisible by 3 print - fizz
//if a number is divisible by 5 print - buzz
//if a number is divisible by both 3 & 5 print - fizzbuzz


function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log(i + ' fizzbuzz');
        }
        else if (i % 5 == 0) {
            console.log(i + ' buzz');
        }
        else if (i % 3 == 0) {
            console.log(i + ' fizz');
        }
        else {
            console.log(i);
        }
    }

}

fizzBuzz();