const Events = require('../models/events.js')
const jwt = require('jsonwebtoken')
//decrypt jsonwebtoken
//Get user information
//host:decryptedUser._id
module.exports = (req, res) => {
	console.log('req.body', req.body)
	console.log('req.headers', req.headers)
	let token = req.headers.authorization.split(' ')[1]
	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		Events.find({ host: decoded._id })
			.then(data => {
				console.log({ data })
				res.send(data)
			})
			.catch(err => {
				res.send({ err })
			})
	})
}
