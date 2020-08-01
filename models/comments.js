'use strict';

const db = require('./index');
const Sequelize = require('sequelize');

const Comments = db.define(
	'comments',
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
		authorId: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		content: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{
		charset: 'utf8',
		collate: 'utf8_unicode_ci',
	}
);

module.exports = Comments;
