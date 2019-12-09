const Users = require('../models/users.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	req.body.password = bcrypt.hashSync(req.body.password, 10)
	console.log('req', req.body)
	Users.findOne({
		email: req.body.email
	}).then(user => {
		if (user) {
			res.send('E-Mail already exists')
		} else {
			Users.create(req.body)
				.then(user => {
					let token = jwt.sign(user.toObject(), process.env.SECRET)
					res.send({ token })
				})
				.catch(err => {
					res.send({ err })
				})
		}
	})
}
