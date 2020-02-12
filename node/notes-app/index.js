const express = require('express')

const setupDB = require('./config/database')
const routes = require('./config/routes')

const app = express()
const PORT = 3033

app.use(express.json())

//connect to DB
setupDB()

app.use('/', routes)

app.get('/', (req,res) => {
    res.json({
        text: "welcome to the website"
    })
})


app.listen(PORT, () => {
    console.log('listening to port', PORT)
})