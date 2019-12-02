const MyEvents = require('../models/events.js')

module.exports = (req, res) => {
	MyEvents.find({})
		.then(data => {
			res.send(data)
		})
		.catch(err => {
			res.send({ err })
		})
}
