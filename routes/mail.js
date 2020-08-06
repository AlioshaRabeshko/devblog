const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: process.env.host,
	port: 465,
	secure: true,
	auth: {
		user: process.env.mailUser,
		pass: process.env.mailPwd,
	},
});

module.exports = transporter;
