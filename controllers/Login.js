const Users = require('../models/users.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	// 1. Check if email exists in db
	Users.findOne({
		email: req.body.email
	})
		.then(user => {
			console.log(user)
			if (user) {
				// 2. If email found, match passwords
				bcrypt.compare(req.body.password, user.password, (err, match) => {
					if (match) {
						let token = jwt.sign(user.toObject(), process.env.SECRET)
						res.send({ token })
					} else {
						// 3. If passwords don't match, response with:"
						res.send(`Wrong password and/or E-Mail address.`)
					}
				})
			} else {
				res.send('Email not found')
			}
		})
		.catch(err => {
			res.status(300).send('err!!!', err)
		})
}
