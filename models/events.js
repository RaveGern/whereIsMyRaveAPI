module.exports = require('mongoose').model('events', {
	name: {
		type: String
	},
	day: {
		type: Date,
		default: Date.now
	},
	start: {
		type: Date
	},
	end: {
		type: Date
	},
	lat: {
		type: Number
	},
	lng: {
		type: Number
	},
	genre: {
		type: String
	},
	code: {
		type: Number
	}
})
