const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }, () => {
	console.log('Connected to MongoDB')
})

module.exports = mongoose
