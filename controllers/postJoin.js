const Users = require('../models/users.js')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	Users.findOne({
		email: req.body.email
	}).then(user => {
		console.log({ user })
		if (user) {
			let match = req.body.code
			let token_guest = jwt.sign(user.toObject(), 'pssst')
			console.log({ match })
			if (match == user.code) {
				res.send(token_guest)
				console.log('did match', match)
			} else {
				res.send('Fcking Tourist, get out of my country')
			}
		}
	})
}
