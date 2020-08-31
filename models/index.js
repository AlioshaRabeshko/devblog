'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
	process.env.dbName,
	process.env.dbUser,
	process.env.dbPwd,
	{
		dialect: 'mysql',
		host: 'localhost',
	}
);

sequelize.sync();

module.exports = sequelize;
