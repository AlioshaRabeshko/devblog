'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const Images = require('../models/images');
const path = require('path');

const storage = multer.diskStorage({
	destination: (req, file, callback) => callback(null, 'uploads'),
	filename: (req, file, callback) => {
		const match = ['image/png', 'image/jpeg', 'image/jpg'];
		if (match.indexOf(file.mimetype) === -1) {
			const message = `${file.originalname} is invalid. Only accept png/jpeg.`;
			return callback(message, null);
		}
		const fileExtension = (file.originalname.match(/\.+[\S]+$/) || [])[0];
		const filename = `${Date.now()}${fileExtension}`;
		callback(null, filename);
	},
});

const upload = multer({ storage }).array('files', 10);

router.post('/upload/:author', upload, (req, res, next) => {
	const files = req.files;
	if (!files) {
		const error = new Error('No File');
		res.status(400).send({ error });
		return next(error);
	}
	const images = [];
	files.forEach((el) => {
		const obj = {
			name: el.filename,
			author: req.params.author,
		};
		Images.create(obj);
		images.push(obj);
	});
	res.json({ images, host: req.hostname });
});

router.get('/:name', (req, res) => {
	fs.exists(`uploads/${req.params.name}`, (exists) => {
		if (exists)
			res.sendFile(path.join(__dirname, `../uploads/${req.params.name}`));
	});
});

router.get('/author/:author', (req, res) => {
	Images.findAll({ where: { author: req.params.author } }).then((data) => {
		const response = data.filter((el) => fs.existsSync(`./uploads/${el.name}`));
		return res.status(200).send({ images: response, host: req.hostname });
	});
});

module.exports = router;
