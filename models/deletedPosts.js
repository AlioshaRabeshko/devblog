'use strict';

const db = require('./index');
const Sequelize = require('sequelize');

const DeletedPosts = db.define(
	'deletedPosts',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		category: {
			type: Sequelize.STRING,
			defaultValue: 'Others',
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
		author: {
			type: Sequelize.STRING,
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
		deletedBy: {
			type: Sequelize.STRING,
			defaultValue: false,
		},
	},
	{
		charset: 'utf8',
		collate: 'utf8_unicode_ci',
	}
);

module.exports = DeletedPosts;
