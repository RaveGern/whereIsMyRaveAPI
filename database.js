const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true }, () => {
	console.log('Connected to MongoDB')
})

module.exports = mongoose
