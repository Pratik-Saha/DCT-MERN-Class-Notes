const fs = require('fs')

fs.readFile('../data.json','utf-8', (err,data) => {
    if(err){
        console.log(err)
    }else{
        const users = JSON.parse(data)
        console.log(users)
    }
})