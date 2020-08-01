'use strict';

const db = require('./index');
const Sequelize = require('sequelize');

const History = db.define(
	'history',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		postId: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		category: {
			type: Sequelize.STRING,
		},
		image: {
			type: Sequelize.STRING,
		},
		description: {
			type: Sequelize.STRING(1024),
			allowNull: false,
		},
		content: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		editor: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		seen: {
			type: Sequelize.INTEGER,
			defaultValue: 0,
		},
		verified: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
	},
	{
		charset: 'utf8',
		collate: 'utf8_unicode_ci',
	}
);

module.exports = History;
