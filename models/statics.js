'use strict';

const db = require('./index');
const Sequelize = require('sequelize');

const Statics = db.define(
	'statics',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		page: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		image: {
			type: Sequelize.STRING,
		},
		content: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
	},
	{
		charset: 'utf8',
		collate: 'utf8_unicode_ci',
	}
);

module.exports = Statics;
