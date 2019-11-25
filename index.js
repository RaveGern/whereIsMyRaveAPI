const express = require('express')
const app = express()
const DB = require('./database.js')

app.get('/event', require('./controllers/getEvent'))
app.get('/user', require('./controllers/getUsers'))

app.listen(1337, () => {
	console.log('Ready on Port 1337')
})
