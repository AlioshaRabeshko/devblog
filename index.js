'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const compression = require('compression');
const path = require('path');

app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use('/api/posts', require('./routes/postsApi'));
app.use('/api/images', require('./routes/imagesApi'));
app.use('/api/users', require('./routes/usersApi'));
app.use('/api/rating', require('./routes/ratingApi'));
app.use('/api/comments', require('./routes/commentsApi'));
app.use(compression());

app.use(express.static('client/build'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}!`);
});
