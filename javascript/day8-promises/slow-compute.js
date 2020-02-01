function slowCompute(str){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if(str){
                resolve(str.toUpperCase())
            }
            else{
                reject('cannot be empty')
            }
        },3000)
    })
}

slowCompute('dct')
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log('error', err)
    })

slowCompute('')
    .then((response) => {
        setTimeout(() => {
            console.log(response.toUpperCase())
        },3000)
    })
    .catch((err) => {
        console.log('error', err)
    })