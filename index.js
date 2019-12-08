const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const DB = require('./database.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Middleware

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({ credentials: true }))

//GET
app.get('/', (req, res) => {
	res.send('Welcome to Rave API')
})

app.get('/MyEvents', require('./controllers/getEvents'))
app.get('/event/:id', require('./controllers/getEventID'))
app.get('/users', require('./controllers/getUsers'))

//POST

app.post('/events', require('./controllers/postEvents'))
app.post('/users', require('./controllers/postUsers'))
app.post('/email', require('./controllers/sentEmail'))
app.post('/event/:id', require('./controllers/sentEmail'))
app.post('/login', require('./controllers/Login'))

//remove
app.delete('/events', require('./controllers/removeEventID'))

app.listen(1337, () => {
	console.log('Ready on Port 1337')
})

module.exports = app
