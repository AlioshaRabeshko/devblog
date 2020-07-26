'use strict';

const express = require('express');
const Sequelize = require('sequelize');
const Statements = require('../models/statements');
const Images = require('../models/images');
const Rating = require('../models/rating');
const router = express.Router();
const sharp = require('sharp');

router.get('/category/', (req, res) => {
	Statements.findAll({
		attributes: [
			[Sequelize.fn('DISTINCT', Sequelize.col('category')), 'category'],
		],
	}).then((category) => {
		return category ? res.status(200).send(category) : res.status(400);
	});
});

router.post('/add', (req, res) => {
	const { author, category, content, description, image, title } = req.body;
	const imageName = image.split('api/images/')[1];
	sharp(`uploads/${imageName}`)
		.resize({ height: 400 })
		.toFile(`uploads/min${imageName}`)
		.then((data) => {
			Images.findOrCreate({
				where: {
					name: `min${imageName}`,
					author: 'system',
				},
			}).then(() => {
				Statements.create({
					author,
					category,
					content,
					description,
					image: image.replace(
						image.split('api/images/')[1],
						`min${imageName}`
					),
					title,
				})
					.then((data) => res.status(200).json(data))
					.catch((err) =>
						res.status(400).send({ msg: 'Something went wrong', err })
					);
			});
		})
		.catch((err) => console.log(err));
});

router.get('/statement/:id', (req, res) => {
	Statements.findOne({ where: { id: req.params.id } })
		.then((data) => {
			data.seen++;
			data.save();
			res.status(200).send(data);
		})
		.catch((err) => res.status(400).send({ msg: 'Something went wrong', err }));
});

router.get('/category/:category/:page', (req, res) => {
	Statements.findAndCountAll({
		order: [['createdAt', 'DESC']],
		limit: 7,
		offset: +req.params.page * 7,
		where: {
			category:
				req.params.category.charAt(0).toUpperCase() +
				req.params.category.slice(1),
		},
		raw: true,
	})
		.then((data) => res.status(200).send(data))
		.catch((err) => res.status(400).send({ msg: 'Something went wrong', err }));
});

router.get('/author/:name/:page', (req, res) => {
	Statements.findAndCountAll({
		order: [['createdAt', 'DESC']],
		limit: 7,
		offset: +req.params.page * 7,
		where: { author: req.params.name },
		raw: true,
	})
		.then((data) => res.status(200).send(data))
		.catch((err) => res.status(400).send({ msg: 'Something went wrong', err }));
});

router.get('/search/:query/:page', (req, res) => {
	Statements.findAndCountAll({
		order: [['createdAt', 'DESC']],
		raw: true,
	})
		.then((data) => {
			const arr = data.rows
				.filter((el) =>
					el.title.toLowerCase().includes(req.params.query.toLowerCase())
				)
				.splice(req.params.page * 7, 7);
			res.status(200).send({
				rows: arr,
				count: arr.length,
			});
		})
		.catch((err) => res.status(400).send({ msg: 'Something went wrong', err }));
});

router.put('/like/:id', (req, res) => {
	Rating.findOrCreate({
		where: { postId: req.params.id, userId: req.body.userId },
		defaults: { rate: 'like' },
	}).then(([rating]) => {
		rating.rate = 'like';
		rating.save();
		return res.status(200).send(rating);
	});
});

router.put('/dislike/:id', (req, res) => {
	Rating.findOrCreate({
		where: { postId: req.params.id, userId: req.body.userId },
		defaults: { rate: 'dislike' },
	}).then(([rating]) => {
		rating.rate = 'dislike';
		rating.save();
		return res.status(200).send(rating);
	});
});

router.get('/rate/:id', async (req, res) => {
	const likes = await Rating.findAndCountAll({
		where: { postId: req.params.id, rate: 'like' },
	});
	const dislikes = await Rating.findAndCountAll({
		where: { postId: req.params.id, rate: 'dislike' },
	});
	res.status(200).send({ likes: likes.count, dislikes: dislikes.count });
});

router.get('/:page', async (req, res) => {
	Statements.findAndCountAll({
		order: [['createdAt', 'DESC']],
		limit: 7,
		offset: +req.params.page * 7,
		raw: true,
	})
		.then((data) => res.status(200).send(data))
		.catch((err) => res.status(400).send({ msg: 'Something went wrong', err }));
});

module.exports = router;
