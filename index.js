const express = require('express')
const cors = require('cors')
const app = express()
const DB = require('./database.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//Middleware

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
	cors({ origin: 'http://whereismyrave.herokuapp.com', credentials: true })
)

//GET
app.get('/', (req, res) => {
	res.send('Welcome to Rave API')
})

app.get('/events', require('./controllers/getEvents'))
app.get('/event/:id', require('./controllers/getEventID'))
app.get('/MyEvents', require('./controllers/getMyEvents'))
app.get('/users', require('./controllers/getUsers'))

//POST

app.post('/events', require('./controllers/postEvents'))
app.post('/users', require('./controllers/postUsers'))
app.post('/email', require('./controllers/sentEmail'))
app.post('/event/:id', require('./controllers/sentEmail'))
app.post('/login', require('./controllers/Login'))

//remove
app.delete('/events', require('./controllers/removeEventID'))

app.listen(process.env.PORT, () => {
	console.log(`Connected to Localhost ${process.env.PORT}`)
})

module.exports = app
