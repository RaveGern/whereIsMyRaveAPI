module.exports = require('mongoose').model('users', {
	name: {
		type: String
	},
	email: {
		type: String
	},
	code: {
		type: Number
	}
})
