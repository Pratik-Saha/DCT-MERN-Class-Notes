function apiCall1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const users = [{id: 1,name: 'sachin'},{id: 2,name: 'virat'}]
            resolve(users)
        },1500)
    })
}

function apiCall2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const hotels = [{id: 1,name: 'slv'},{id: 2,name: 'roti ghar'}]
            resolve(hotels)
        },1500)
    })
}

Promise.all([apiCall1(),apiCall2()]) // wait for all the promises to resolve or any of them to reject
    .then((values) => {
        const [apiValue1,apiValue2] = values 
        console.log(apiValue1,apiValue2)
    })
    .catch((err) => {
        console.log('error occured')
    })