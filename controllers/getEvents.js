const Events = require('../models/events.js')

module.exports = (req, res) => {
	Events.find({})
		.populate({
			path: 'users',
			select: 'name'
		})
		.then(data => {
			res.send(data)
		})
		.catch(err => {
			res.send({ err })
		})
}
