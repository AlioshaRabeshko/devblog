'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize('devblog', 'devblog', 'qwerty123', {
	dialect: 'mysql',
	host: 'localhost',
});

sequelize.sync();

module.exports = sequelize;
