const db = require('./index');
const Sequelize = require('sequelize');

const Images = db.define(
	'images',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		author: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{
		charset: 'utf8',
		collate: 'utf8_unicode_ci',
	}
);

module.exports = Images;
