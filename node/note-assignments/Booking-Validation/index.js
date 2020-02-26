const express = require('express')
const app = express()
const setupDB = require('./config/database')
const routes = require('./config/routes')
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', routes)

setupDB()

app.listen(PORT, ()  => {
    console.log('listening at port: ', PORT)
})