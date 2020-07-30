'use strict';

const express = require('express');
const Sequelize = require('sequelize');
const Posts = require('../models/posts');
const Users = require('../models/users');
const DeletedPosts = require('../models/deletedPosts');
const History = require('../models/postsHistory');
const router = express.Router();

router.get('/category/', async (req, res) => {
	try {
		const categories = await Posts.findAll({
			attributes: [
				[Sequelize.fn('DISTINCT', Sequelize.col('category')), 'category'],
			],
		});
		return res.status(200).send(categories.map((el) => el.category));
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
		const post = await Posts.create({
			author,
			category,
			content,
			description,
			image,
			title,
			verified: ver.verified >= 20,
		});
		return res.status(201).json(post);
	} catch (err) {
		return res.status(404);
	}
});

router.get('/post/:id', async (req, res) => {
	try {
		const post = await Posts.findOne({ where: { id: req.params.id } });
		post.seen++;
		post.save();
		return res.status(202).send(post);
	} catch (err) {
		return res.status(404);
	}
});

router.get('/category/:category/:page', async (req, res) => {
	try {
		const data = await Posts.findAndCountAll({
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
			where: {
				author: req.params.name,
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
		const result = arr.splice(req.params.page * 7, 7);
		return res.status(200).send({ count, rows: result });
	} catch (err) {
		res.status(400);
	}
});

router.get('/verify', async (req, res) => {
	try {
		const posts = await Posts.findAll({ where: { verified: false } });
		return res.status(202).send(posts);
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
		const verifier = await Users.findOne({ where: { id: req.body.userId } });
		if (verifier.verified <= 50) return req.status(403);
		const post = await Posts.findOne({ where: { id: req.params.id } });
		post.verified = true;
		post.save();
		const author = await Users.findOne({ where: { shortName: post.author } });
		author.verified++;
		author.save();
		return res.status(202).send(post);
	} catch (err) {
		return res.status(404);
	}
});

router.put('/edit/:id', async (req, res) => {
	try {
		const verifier = await Users.findOne({ where: { id: req.body.userId } });
		if (verifier.verified <= 50) return req.status(403);
		const post = await Posts.findOne({ where: { id: req.params.id } });
		await History.create({
			postId: post.id,
			title: post.title,
			category: post.category,
			image: post.image,
			description: post.description,
			content: post.content,
			seen: post.seen,
			verified: post.verified,
			editor: verifier.shortName,
		});
		for (let key in req.body.data)
			if (req.body.data[key] !== null) post[key] = req.body.data[key];
		post.save();
		return res.status(202).send(post);
	} catch (err) {
		return res.status(404).send({ msg: 'no posts' });
	}
});

router.delete('/:userName/:id', async (req, res) => {
	try {
		const post = await Posts.findOne({ where: { id: req.params.id } });
		const { author, category, content, description, image, title } = post;
		await DeletedPosts.create({
			author,
			category,
			content,
			description,
			image,
			title,
			deletedBy: req.params.userName,
		});
		post.destroy();
		return res.status(200).send('done');
	} catch (err) {
		return res.status(404);
	}
});

module.exports = router;
