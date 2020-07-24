'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Users = require('../models/users');

router.post('/login', (req, res) => {
	Users.findOne({ where: { email: req.body.data.email } })
		.then((data) => {
			const { id, name, shortName } = data;
			data.password === req.body.data.password
				? res.status(200).send({
						token: jwt.sign(
							{
								exp: Math.floor(Date.now() / 1000) + 60 * 60 * 168,
								data: req.body.data,
							},
							'secret'
						),
						user: { id, name, shortName },
				  })
				: res.status(400).send({ msg: 'Wrong password...' });
		})
		.catch((err) => res.status(400).send({ msg: 'Wrong email...', err }));
});

router.post('/signup', (req, res) => {
	console.log(req.body.data);
	Users.create(req.body.data)
		.then((data) =>
			res.status(200).send({
				user: jwt.sign(
					{
						exp: Math.floor(Date.now() / 1000) + 60 * 60 * 168,
						data,
					},
					'secret'
				),
			})
		)
		.catch((err) => res.status(400).send({ msg: 'Wrong email...', err }));
});

router.post('/check', (req, res) => {
	jwt.verify(req.body.token, 'secret', (err, decoded) => {
		err
			? res.status(400).send(err)
			: Users.findOne({
					where: { email: decoded.data.email },
			  }).then(({ id, name, shortName }) =>
					res
						.status(200)
						.send({ token: req.body.token, user: { id, name, shortName } })
			  );
	});
});

module.exports = router;
