const db = require('./index');
const Sequelize = require('sequelize');

const Rating = db.define(
	'rating',
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
		userId: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		rate: {
			type: Sequelize.STRING,
			allowNull: true,
		},
	},
	{
		charset: 'utf8',
		collate: 'utf8_unicode_ci',
	}
);

module.exports = Rating;
