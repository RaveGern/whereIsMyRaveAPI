const Events = require('../models/events.js')

module.exports = (req, res) => {
	Events.findByIdAndDelete(req.body.id)
		.then(data => {
			console.log({ data })
			res.send(data)
		})
		.catch(err => {
			res.send({ err })
		})
}
