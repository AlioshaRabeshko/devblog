'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use('/api/statements', require('./routes/statementsApi'));
app.use('/api/images', require('./routes/imagesApi'));
app.use('/api/users', require('./routes/usersApi'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}!`);
});
