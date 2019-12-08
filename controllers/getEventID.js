const Event = require('../models/events.js')

module.exports = (req, res) => {
	console.log(req.params.id)
	Event.findById(req.params.id)
		.then(data => {
			res.send(data)
		})
		.catch(err => {
			res.send({ err })
		})
}
