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
	try {
		request.get(
			req.body.link,
			{ encoding: null },
			async (err, response, body) => {
				if (err) return res.status(400).send({ err: 'Wrong link...' });
				const filename = `${uniqueFilename('./uploads')}.jpeg`;
				const bufferMin = await imagemin.buffer(body, {
					plugins: [imageminMozjpeg({ quality: 75 })],
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
	} catch (err) {
		return res.status(400).send({ msg: 'Something went wrong...' });
	}
});

const upload = multer().array('files', 10);

router.post('/upload/:author', upload, async (req, res, next) => {
	try {
		const images = [];
		if (!req.files) res.status(400).send({ msg: 'No files chosen...' });
		for (const img of req.files) {
			const filename = `${uniqueFilename('./uploads')}.jpeg`;
			const buffer = await imagemin.buffer(img.buffer, {
				plugins: [imageminMozjpeg({ quality: 75 })],
			});
			const writeableStream = fs.createWriteStream(filename);
			writeableStream.write(buffer);
			writeableStream.end();
			writeableStream.on('error', (err) => console.log(err));
			const obj = {
				name: filename.split('/')[1],
				author: req.params.author,
			};
			Images.create(obj);
			images.push(obj);
		}
		return res.send({ images, host: req.hostname });
	} catch (error) {
		return res.status(400).send({ msg: 'Something went wrong...' });
	}
});

router.get('/:name', (req, res) => {
	fs.exists(`uploads/${req.params.name}`, (exists) => {
		return exists
			? res.sendFile(path.join(__dirname, `../uploads/${req.params.name}`))
			: res.status(404).send({ msg: 'There in no such image...' });
	});
});

router.get('/author/:author', (req, res) => {
	Images.findAll({ where: { author: req.params.author } }).then((data) => {
		const response = data.filter((el) => fs.existsSync(`./uploads/${el.name}`));
		return res.status(200).send({ images: response, host: req.hostname });
	});
});

module.exports = router;
