const Sequelize = require('sequelize');

const sequelize = new Sequelize('devblog', 'devblog', 'qwerty123', {
	dialect: 'mysql',
	host: 'localhost',
	define: {
		timestamps: false,
	},
});

// sequelize.sync({ force: true });

module.exports = sequelize;
