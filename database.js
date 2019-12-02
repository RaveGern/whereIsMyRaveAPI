const mongoose = require('mongoose')

mongoose.connect(
	'mongodb+srv://david:airbnb2019@cluster0-o93ck.mongodb.net/whereIsMyRave',
	{ useNewUrlParser: true },
	() => {
		console.log('Connected to MongoDB')
	}
)

module.exports = mongoose
