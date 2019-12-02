const Event = require('../models/events.js')

module.exports = (req, res) => {
	Event.findById(req.params.id)
		.then(data => {
			res.send(data)
		})
		.catch(err => {
			res.send({ err })
		})
}
