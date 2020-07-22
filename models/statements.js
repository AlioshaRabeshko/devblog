const db = require('./index');
const Sequelize = require('sequelize');

const Statements = db.define(
	'statements',
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
			allowNull: false,
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
		likes: {
			type: Sequelize.INTEGER,
			defaultValue: 0,
		},
		dislikes: {
			type: Sequelize.INTEGER,
			defaultValue: 0,
		},
		seen: {
			type: Sequelize.INTEGER,
			defaultValue: 0,
		},
	},
	{
		charset: 'utf8',
		collate: 'utf8_unicode_ci',
	}
);

module.exports = Statements;
