const Events = require('../models/events.js')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	let token = req.headers.authorization.split(' ')[1]
	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		console.log('postEvents', req.body)
		console.log('req.headers', req.headers)
		if (decoded) {
			console.log({ decoded })
			req.body.host = decoded._id
			console.log('req.body', req.body)
			Events.create(req.body)
				.then(data => {
					console.log({ data })
					res.send(data)
				})
				.catch(err => {
					res.send(err)
				})
		}
	})
}
