'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Users = require('../models/users');
const Subs = require('../models/subs');
const Posts = require('../models/posts');
const Sequelize = require('sequelize');

router.post('/login', async (req, res) => {
	try {
		const user = await Users.findOne({ where: { email: req.body.data.email } });
		const { id, name, shortName, verified, status } = user;
		const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 168;
		if (user.password === req.body.data.password)
			return res.status(202).send({
				token: jwt.sign({ exp, user }, 'secret'),
				user: { id, name, shortName, verified, status },
			});
		return res.status(401).send({ msg: 'Wrong password...' });
	} catch (err) {
		return res.status(401).send({ msg: 'Wrong email...', err });
	}
});

router.post('/signup', async (req, res) => {
	try {
		const user = await Users.create(req.body.data);
		const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 168;
		const { id, name, shortName, verified, status } = user;
		return res.status(201).send({
			token: jwt.sign({ exp, user }, 'secret'),
			user: { id, name, shortName, verified, status },
		});
	} catch (err) {
		res.status(401).send({ msg: 'Such email is already in use...', err });
	}
});

router.post('/check', (req, res) => {
	jwt.verify(req.body.token, 'secret', async (err, decoded) => {
		if (err) return res.status(401).send(err);
		try {
			const { id, name, shortName, verified, status } = await Users.findOne({
				where: { email: decoded.user.email },
			});
			return res.status(202).send({
				token: req.body.token,
				user: { id, name, shortName, verified, status },
			});
		} catch (err) {
			return res.status(401).send(err);
		}
	});
});

router.put('/settings/:id', async (req, res) => {
	try {
		const user = await Users.findOne({ where: { id: req.params.id } });
		user.status = req.body.status;
		user.save();
		return res.status(202).send(user);
	} catch (error) {
		return res.status(404);
	}
});

router.get('/settings/:id', async (req, res) => {
	try {
		const user = await Users.findOne({
			attributes: ['email'],
			where: { id: req.params.id },
		});
		const subs = await Subs.findAll({ where: { email: user.email } });
		return res.status(200).send(subs.map((el) => el.category));
	} catch (error) {
		return res.status(404);
	}
});

router.put('/settings/:sub/:id', async (req, res) => {
	try {
		const user = await Users.findOne({ where: { id: req.params.id } });
		const [sub, created] = await Subs.findOrCreate({
			where: { email: user.email, category: req.params.sub },
		});
		if (created) return res.status(201);
		sub.destroy();
		return res.status(202);
	} catch (error) {
		return res.status(404);
	}
});

module.exports = router;
