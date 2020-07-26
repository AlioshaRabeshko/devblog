'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Users = require('../models/users');

router.post('/login', async (req, res) => {
	try {
		const user = await Users.findOne({ where: { email: req.body.data.email } });
		const { id, name, shortName, verified } = user;
		const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 168;
		if (user.password === req.body.data.password)
			return res.status(202).send({
				token: jwt.sign({ exp, user }, 'secret'),
				user: { id, name, shortName, verified },
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
		const { id, name, shortName, verified } = user;
		return res.status(201).send({
			token: jwt.sign({ exp, user }, 'secret'),
			user: { id, name, shortName, verified },
		});
	} catch (err) {
		res.status(401).send({ msg: 'Such email is already in use...', err });
	}
});

router.post('/check', (req, res) => {
	jwt.verify(req.body.token, 'secret', async (err, decoded) => {
		if (err) return res.status(401).send(err);
		try {
			const { id, name, shortName, verified } = await Users.findOne({
				where: { email: decoded.data.email },
			});
			return res.status(202).send({
				token: req.body.token,
				user: { id, name, shortName, verified },
			});
		} catch (err) {
			return res.status(401).send(err);
		}
	});
});

module.exports = router;
