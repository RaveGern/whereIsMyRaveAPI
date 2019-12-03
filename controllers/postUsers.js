const Users = require('../models/users.js')

module.exports = (req, res) => {
	console.log('postUsers', req.body)
	Users.create(req.body)
		.then(data => {
			res.send(data)
		})
		.catch(err => {
			res.send({ err })
		})
}
