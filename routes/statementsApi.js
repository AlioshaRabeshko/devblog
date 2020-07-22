'use strict';

const express = require('express');
const Statements = require('../models/statements');
const router = express.Router();

router.get('/', (req, res) => {
	Statements.findAll({ raw: true })
		.then((data) => res.json(data))
		.catch((err) => res.status(400).send({ msg: 'Something went wrong', err }));
});

router.get('/:id', (req, res) => {
	Statements.findOne({ where: { id: req.params.id } })
		.then((data) => res.json(data))
		.catch((err) => res.status(400).send({ msg: 'Something went wrong', err }));
});

router.get('/category/:category', (req, res) => {
	Statements.findAll({
		where: {
			category:
				req.params.category.charAt(0).toUpperCase() +
				req.params.category.slice(1),
		},
		raw: true,
	})
		.then((data) => res.json(data))
		.catch((err) => res.status(400).send({ msg: 'Something went wrong', err }));
});

router.get('/author/:name', (req, res) => {
	Statements.findAll({ where: { category: req.params.name }, raw: true })
		.then((data) => res.json(data))
		.catch((err) => res.status(400).send({ msg: 'Something went wrong', err }));
});

router.get('/search/:query', (req, res) => {
	Statements.findAll({ raw: true })
		.then((data) =>
			res.json(
				data.filter((el) =>
					el.title.toLowerCase().includes(req.params.query.toLowerCase())
				)
			)
		)
		.catch((err) => res.status(400).send({ msg: 'Something went wrong', err }));
});

router.post('/add', (req, res) => {
	Statements.create(req.body.data)
		.then((data) => res.status(200).json(data))
		.catch((err) => res.status(400).send({ msg: 'Something went wrong', err }));
});

module.exports = router;
