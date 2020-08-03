'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const Images = require('../models/images');
const path = require('path');
const request = require('request');
const sharp = require('sharp');
const uniqueFilename = require('unique-filename');

router.put('/link/:author', (req, res) => {
	const now = Date.now();
	request.head(req.body.link, async () => {
		request(req.body.link)
			.pipe(fs.createWriteStream(`${now}.jpg`))
			.on('close', async () => {
				const obj = {
					name: `${now}.webp`,
					author: req.params.author,
				};
				Images.create(obj);
				await sharp(`${now}.jpg`)
					.resize({ width: 1150 })
					.toFile(`uploads/${now}.webp`);
				fs.unlink(`${now}.jpg`, (err) => {
					console.log(err);
				});
				res.json({ images: [obj], host: req.hostname });
			});
	});
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
		await sharp(img.buffer)
			.resize({ width: 1150, withoutEnlargement: true })
			.jpeg({ quality: 80 })
			.toBuffer()
			.then((data) => {
				const writeStream = fs.createWriteStream(filename);
				writeStream.write(data);
				writeStream.end();
				writeStream.on('error', function (err) {
					console.log(err);
				});
				const obj = { name: filename.split('/')[1], author: req.params.author };
				Images.create(obj);
				images.push(obj);
			});
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
