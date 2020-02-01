function myPromise(){
    return new Promise(function(resolve,reject){ //creating a new promise object
        //console.log(resolve,reject)
        //write your logic for asyncronous operation inside the executor
        setTimeout(() => {
            const random = Math.round(Math.random() * 100)
            if(random % 2 == 0){
                resolve(random) //resolve the promsise with random number
            }
            else{
                reject(random) //reject the promse with random number
            }
        },2000)
    })
}


console.log(typeof myPromise()) //'object'
console.log(myPromise()) // in pending state

//instance methods
myPromise()
    .then((n) => { // the callback attached then then gets assigned to resolve
        console.log('even', n)
    })
    .catch((err) => { // the callback attached then then gets assigned to reject
        console.log('odd', err)
    })