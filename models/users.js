'use strict';

const db = require('./index');
const Sequelize = require('sequelize');

const Users = db.define(
	'users',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		shortName: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		image: {
			type: Sequelize.STRING,
		},
		status: {
			type: Sequelize.STRING,
		},
		verified: {
			type: Sequelize.INTEGER,
			defaultValue: 0,
		},
	},
	{
		charset: 'utf8',
		collate: 'utf8_unicode_ci',
	}
);

module.exports = Users;
