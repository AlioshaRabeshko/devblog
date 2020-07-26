'use strict';

const express = require('express');
const Sequelize = require('sequelize');
const Posts = require('../models/posts');
const Users = require('../models/users');
const Images = require('../models/images');
const Rating = require('../models/rating');
const router = express.Router();
const sharp = require('sharp');

router.get('/category/', async (req, res) => {
	try {
		const category = await Posts.findAll({
			attributes: [
				[Sequelize.fn('DISTINCT', Sequelize.col('category')), 'category'],
			],
		});
		return res.status(200).send(category);
	} catch (err) {
		return res.status(404);
	}
});

router.post('/add', async (req, res) => {
	try {
		const { author, category, content, description, image, title } = req.body;
		const ver = await Users.findOne({
			attributes: ['verified'],
			where: { shortName: author },
		});
		const imageName = image.split('api/images/')[1];
		await sharp(`uploads/${imageName}`)
			.resize({ height: 400 })
			.toFile(`uploads/min${imageName}`);
		await Images.findOrCreate({
			where: {
				name: `min${imageName}`,
				author: 'system',
			},
		});
		const post = await Posts.create({
			author,
			category,
			content,
			description,
			image: image.replace(image.split('api/images/')[1], `min${imageName}`),
			title,
			verified: ver.verified >= 10,
		});
		return res.status(201).json(post);
	} catch (err) {
		return res.status(400);
	}
});

router.get('/post/:id', async (req, res) => {
	try {
		const post = await Posts.findOne({ where: { id: req.params.id } });
		post.seen++;
		post.save();
		return res.status(202).send(data);
	} catch (err) {
		return res.status(404);
	}
});

router.get('/category/:category/:page', async (req, res) => {
	try {
		const data = Posts.findAndCountAll({
			order: [['createdAt', 'DESC']],
			limit: 7,
			offset: +req.params.page * 7,
			where: {
				category:
					req.params.category.charAt(0).toUpperCase() +
					req.params.category.slice(1),
				verified: true,
			},
			raw: true,
		});
		return res.status(200).send(data);
	} catch (err) {
		res.status(400);
	}
});

router.get('/author/:name/:page', async (req, res) => {
	try {
		const data = await Posts.findAndCountAll({
			order: [['createdAt', 'DESC']],
			limit: 7,
			offset: +req.params.page * 7,
			where: {
				author: req.params.name,
				verified: true,
			},
			raw: true,
		});
		return res.status(200).send(data);
	} catch (err) {
		res.status(400);
	}
});

router.get('/search/:query/:page', async (req, res) => {
	try {
		const data = await Posts.findAndCountAll({
			order: [['createdAt', 'DESC']],
			raw: true,
			where: {
				verified: true,
			},
		});
		const arr = data.rows.filter((el) =>
			el.title.toLowerCase().includes(req.params.query.toLowerCase())
		);
		const count = arr.length;
		arr.splice(req.params.page * 7, 7);
		return res.status(200).send({ count, rows: arr });
	} catch (err) {
		res.status(400);
	}
});

router.put('/like/:id', async (req, res) => {
	try {
		const [rating, created] = await Rating.findOrCreate({
			where: { postId: req.params.id, userId: req.body.userId },
			defaults: { rate: 'like' },
		});
		rating.rate = 'like';
		rating.save();
		return res.status(created ? 201 : 202).send(rating);
	} catch (err) {
		return res.status(400);
	}
});

router.put('/dislike/:id', async (req, res) => {
	try {
		const [rating, created] = await Rating.findOrCreate({
			where: { postId: req.params.id, userId: req.body.userId },
			defaults: { rate: 'dislike' },
		});
		rating.rate = 'dislike';
		rating.save();
		return res.status(created ? 201 : 202).send(rating);
	} catch (err) {
		return res.status(400);
	}
});

router.get('/rate/:id', async (req, res) => {
	try {
		const likes = await Rating.findAndCountAll({
			where: { postId: req.params.id, rate: 'like' },
		});
		const dislikes = await Rating.findAndCountAll({
			where: { postId: req.params.id, rate: 'dislike' },
		});
		return res
			.status(200)
			.send({ likes: likes.count, dislikes: dislikes.count });
	} catch (err) {
		return res.status(404);
	}
});

router.get('/:page', async (req, res) => {
	try {
		const posts = await Posts.findAndCountAll({
			order: [['createdAt', 'DESC']],
			limit: 7,
			offset: +req.params.page * 7,
			raw: true,
			where: {
				verified: true,
			},
		});
		return res.status(202).send(posts);
	} catch (err) {
		return res.status(404);
	}
});

router.put('/verify/:id', async (req, res) => {
	try {
		const verifier = await Users.findOne({
			attributes: ['verified'],
			where: { id: req.body.verifier },
		});
	} catch (err) {
		return res.status(404);
	}
	if (verifier.verified <= 50) return req.status(403);
	try {
		const post = await Posts.findOne({
			attributes: ['verified', 'author'],
			where: { id: req.params.id },
		});
		post.verified = true;
		post.save();
		const author = await Users.findOne({
			attributes: ['verified'],
			where: { shortName: post.author },
		});
		author.verified++;
		author.save();
		return res.status(202);
	} catch (err) {
		return res.status(404);
	}
});

router.delete('/verify/delete/:id', async (req, res) => {
	try {
		const post = await Posts.findOne({ where: { id: req.params.id } });
		await post.destroy();
		return res.status(200);
	} catch (err) {
		return res.status(400);
	}
});

router.get('/verify', async (req, res) => {
	try {
		const posts = await Posts.findAll({ where: { verified: false } });
		return res.status(302).send(posts);
	} catch (err) {
		return res.status(404).send({ msg: 'no posts' });
	}
});

module.exports = router;
