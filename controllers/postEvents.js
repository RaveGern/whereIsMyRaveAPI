const Events = require('../models/events.js')

module.exports = (req, res) => {
	console.log('postEvents', req.body)
	Events.create(req.body)
		.then(data => {
			res.send(data)
		})
		.catch(err => {
			res.send({ err })
		})
}
