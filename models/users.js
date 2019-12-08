module.exports = require('mongoose').model('users', {
	name: {
		type: String,
		required: [true, 'Name is required']
	},
	email: {
		type: String,
		required: [true, 'E-Mail is required']
	},
	password: {
		type: String,
		required: [true, 'Password is required']
	},
	code: {
		type: Number
	}
})
