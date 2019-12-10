const mongoose = require('mongoose')
module.exports = require('mongoose').model('events', {
	name: {
		type: String,
		required: [true, 'Name is required']
	},
	day: {
		type: Date,
		default: Date.now
	},
	start: {
		type: Date,
		required: [true, 'Start Date is required']
	},
	end: {
		type: Date,
		required: [true, 'End Date is required']
	},
	lat: {
		type: Number,
		required: [true, 'Lat is required']
	},
	lng: {
		type: Number,
		required: [true, 'Lng is required']
	},
	genre: {
		type: String,
		required: [true, 'Genre is required']
	},
	code: {
		type: String,
		required: [true, 'Code is required']
	},
	host: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	}
})
