var nodemailer = require('nodemailer')
module.exports = (req, res) => {
	console.log('req.body', req.body)
	console.log('req.body.code', req.body.code)
	console.log('working point 1')
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD
		}
	})

	let mailOptions = {
		from: 'dave.geran@googlemail.com',
		to: req.body.email,
		subject: 'Sending Email using Node.js',
		text:
			'You just received a very secret invitation to an upcoming Rave.Check out https://whereismyrave.herokuapp.com/ and insert the following Code!' +
			`${req.body.code}`
	}

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error)
		} else {
			console.log('Email sent: ' + info.response)
		}
	})
}
