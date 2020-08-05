'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const Images = require('../models/images');
const path = require('path');
const request = require('request');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const uniqueFilename = require('unique-filename');

router.put('/link/:author', async (req, res) => {
	request.get(
		req.body.link,
		{ encoding: null },
		async (err, response, body) => {
			if (err) return res.status(400).send(null);
			const filename = `${uniqueFilename('./uploads')}.jpeg`;
			const bufferMin = await imagemin.buffer(body, {
				plugins: [
					imageminMozjpeg({
						quality: 75,
					}),
				],
			});
			const writeableStream = fs.createWriteStream(filename);
			writeableStream.write(bufferMin);
			writeableStream.end(() => {
				const obj = {
					name: filename.split('/')[1],
					author: req.params.author,
				};
				Images.create(obj);
				return res.json({ images: [obj], host: req.hostname });
			});
			writeableStream.on('error', (err) => console.log(err));
		}
	);
});

const upload = multer().array('files', 10);

router.post('/upload/:author', upload, async (req, res, next) => {
	const files = req.files;
	const images = [];
	if (!files) {
		const error = new Error('No Files');
		res.status(400).send({ error });
		return next(error);
	}
	for (const img of files) {
		const filename = `${uniqueFilename('./uploads')}.jpeg`;
		const buffer = await imagemin.buffer(img.buffer, {
			plugins: [imageminMozjpeg({ quality: 75 })],
		});
		const writeableStream = fs.createWriteStream(filename);
		writeableStream.write(buffer);
		writeableStream.end();
		writeableStream.on('error', function (err) {
			console.log(err);
		});
		const obj = {
			name: filename.split('/')[1],
			author: req.params.author,
		};
		Images.create(obj);
		images.push(obj);
	}
	return res.send({ images, host: req.hostname });
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
