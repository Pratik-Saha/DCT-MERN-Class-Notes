const express = require('express') //common js module loader syntax
const fs = require('fs')
const app = express()
const port = 3033

//Route or Request handler
// //app.httpMethod(url, callback)

// configuring express to read json data
app.use(express.json())

//application level middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${req.ip} ${new Date()}`)
    next()
})

// const users = [
//     {id: 1, name: 'mani'},
//     {id: 2, name: 'pramod'}
// ]

const products = [
    {id: 1, name: 'marker', price: 10},
    {id: 2, name: 'pencil', price: 10},
    {id: 3, name: 'scale', price: 10}
]

const authenticateUser = (req, res, next) => {
    const xAuth = req.headers['x-auth']
    if(xAuth == 'secret123'){
        const msg = 'you are authenticated'
        req.msg = msg
        next()
    }
    else{
        res.json({error: 'invalid token'})
    }
}

//route middleware functions
app.get('/products', authenticateUser, (req, res) => {
    console.log(req.msg)
    res.json(products)
})

app.get('/products/:id', authenticateUser, (req, res) => {
    const id = req.params.id
    const product = products.find((product) => {
        return product.id == id
    })
    if(product){
        res.json(product)
    }else{
        res.json({})
    }
})

app.get('/', function(req,res){
    res.send('welcome to the website')
})

app.get('/users', function(req, res){
    fs.readFile('./data.json', 'utf-8', (err, data) => {
        if(err){
            res.json(err)
        }else{
            const users = JSON.parse(data)
            res.json(users)
        }
    })
})

app.get('/users/:id', function(req, res){
    const id = req.params.id
    fs.readFile('./data.json', 'utf-8', (err, data) => {
        if(err){
            res.json(err)
        }else{
            const users = JSON.parse(data)
            const user = users.find((user) => {
                return user.id == id
            })
            if(user){
                res.json(user)
            }else{
                res.json({})
            }
        }
    })
})

app.post('/users', (req,res) => {
    const user = req.body
    fs.readFile('./data.json','utf-8',(err, data) => {
        if(err){
            res.json(err)
        }
        else{
            const users = JSON.parse(data)
            users.push(user)
            fs.writeFile('./data.json',JSON.stringify(users),() => {
                res.json(user)
            })
        }
    })
})

app.put('/users/:id',(req, res) => {
    const id = req.params.id
    fs.readFile('./data.json','utf-8',(err, data) => {
        if(err){
            res.json(err)
        }
        else{
            const users = JSON.parse(data)
            const user = users.find((user) => {
                return user.id == id
            })
            if(!user){
                res.json({
                    "message": "user id not found"
                })
            }
            else{
                user.name = req.body.name
                fs.writeFile('./data.json',JSON.stringify(users),() => {
                    res.json({
                        "message": "user details updated"
                    })
                })
            }
        }
    })
})

app.delete('/users/:id', (req, res) => {
    const id = req.params.id
    fs.readFile('./data.json','utf-8',(err, data) => {
        if(err){
            res.json(err)
        }
        else{
            const users = JSON.parse(data)
            const newUsers = users.filter((user) => {
                return user.id != id
            })
            if(users.length == newUsers.length){
                res.json({
                    "message": "user id not found"
                })
            }
            else{
                fs.writeFile('./data.json',JSON.stringify(newUsers),() => {
                    res.json({
                        "message": "user deleted successfully"
                    })
                })
            }
        }
    })
})

app.listen(port, () => {
    console.log('listening to port: ',port)
})