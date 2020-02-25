const express = require('express')
const app= express()
const passport = require('passport')
const PORT = 3000

const setupDB = require('./config/database')
const routes = require('./config/routes')

app.use(express.json())
app.use(passport.initialize()) //intialize passport 
app.use('/', routes)

//configure DB
setupDB()


app.listen(PORT, () => {
    console.log('listening to port ', PORT)
})