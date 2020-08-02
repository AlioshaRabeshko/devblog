'use strict';

const express = require('express');
const Users = require('../models/users');
const Comments = require('../models/comments');
const router = express.Router();

router.put('/edit/:id', async (req, res) => {
	try {
		const comment = await Comments.findOne({ where: { id: req.params.id } });
		comment.content = req.body.content;
		comment.save();
		return res.status(200).send(comment);
	} catch (error) {
		console.log('error: ', error);
		return res.status(404).send(error);
	}
});

router.get('/:postId/:postAuthor', async (req, res) => {
	try {
		const { postId, postAuthor } = req.params;
		const arr = [];
		const comments = await Comments.findAll({
			where: { postId },
			order: [['createdAt', 'DESC']],
		});
		for (const comment of comments) {
			const user = await Users.findOne({ where: { id: comment.authorId } });
			const { id, name, status, verified } = user;
			const role =
				verified >= 999
					? 'Supervisor'
					: verified >= 100
					? 'Content editor'
					: id === +postAuthor
					? 'Author'
					: 'User';
			arr.push({
				id: comment.id,
				postId,
				author: { name, status, role },
				content: comment.content,
				createdAt: comment.createdAt,
			});
		}
		return res.status(200).send(arr);
	} catch (error) {
		console.log('error: ', error);
		return res.status(404).send(error);
	}
});

router.put('/:postId/:postAuthor', async (req, res) => {
	try {
		const { authorId, content } = req.body;
		const comment = await Comments.create({
			postId: req.params.postId,
			authorId,
			content,
		});
		const user = await Users.findOne({ where: { id: authorId } });
		const { id, name, status, verified } = user;
		const role =
			verified >= 999
				? 'Supervisor'
				: verified >= 100
				? 'Content editor'
				: id === req.params.postAuthor
				? 'Author'
				: 'User';
		return res.status(200).send({
			id: comment.id,
			postId: comment.postId,
			author: { name, status, role },
			content: comment.content,
			createdAt: comment.createdAt,
		});
	} catch (error) {
		return req.status(404).send(error);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const comment = await Comments.findOne({ where: { id: req.params.id } });
		comment.destroy();
		return res.status(200).send();
	} catch (error) {
		console.log('error: ', error);
		return res.status(404).send(error);
	}
});

module.exports = router;
