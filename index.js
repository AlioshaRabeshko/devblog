'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const compression = require('compression');

app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use('/api/statements', require('./routes/statementsApi'));
app.use('/api/images', require('./routes/imagesApi'));
app.use('/api/users', require('./routes/usersApi'));
app.use(compression());

// app.use(express.static('client/build'));

// app.get('*', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}!`);
});
