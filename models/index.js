'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize('devblog', 'devblog', 'qwerty123', {
	dialect: 'mysql',
	host: 'localhost',
});

// sequelize.sync({ force: true });

module.exports = sequelize;
