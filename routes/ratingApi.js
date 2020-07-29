'use strict';

const express = require('express');
const Sequelize = require('sequelize');
const Rating = require('../models/rating');
const router = express.Router();

router.put('/like/:postId', async (req, res) => {
	try {
		const [rating, created] = await Rating.findOrCreate({
			where: { postId: req.params.postId, userId: req.body.userId },
			defaults: { rate: 'like' },
		});
		if (rating.rate === 'like' && !created) {
			rating.destroy();
			return res.status(202).send({ liked: 0 });
		} else {
			rating.rate = 'like';
			rating.save();
			return res.status(201).send({ liked: 1 });
		}
	} catch (err) {
		return res.status(400);
	}
});

router.put('/dislike/:postId', async (req, res) => {
	try {
		const [rating, created] = await Rating.findOrCreate({
			where: { postId: req.params.postId, userId: req.body.userId },
			defaults: { rate: 'dislike' },
		});
		if (rating.rate === 'dislike' && !created) {
			rating.destroy();
			return res.status(202).send({ liked: 0 });
		} else {
			rating.rate = 'dislike';
			rating.save();
			return res.status(201).send({ liked: -1 });
		}
	} catch (err) {
		return res.status(400);
	}
});

router.get('/:postId/:userId', async (req, res) => {
	try {
		const { count: likesCount } = await Rating.findAndCountAll({
			where: { postId: req.params.postId, rate: 'like' },
		});
		const { count: dislikesCount } = await Rating.findAndCountAll({
			where: { postId: req.params.postId, rate: 'dislike' },
		});
		try {
			const liked = await Rating.findOne({
				where: { postId: req.params.postId, userId: req.params.userId },
			});
			return res.status(200).send({
				likes: likesCount,
				dislikes: dislikesCount,
				liked: liked.rate === 'like' ? 1 : -1,
			});
		} catch (error) {
			return res
				.status(200)
				.send({ likes: likesCount, dislikes: dislikesCount, liked: 0 });
		}
	} catch (err) {
		return res.status(404);
	}
});

module.exports = router;
