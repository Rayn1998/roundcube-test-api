const express = require('express');
const { getMessages, createMessage } = require('./controllers/dbControllers');
const errorHandler = require('./utils/errorHandler');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: '*',
}))

app.use(express.json());

app.get('/', getMessages);

app.post('/message', createMessage);

app.use('*', (err, req, res, next) => {
	const statusCode = err.statusCode || 500;

	const message =
		statusCode === 500
			? 'There is error uccured on the server...'
			: err.message;
	res.status(statusCode).send({ message });
});

app.listen(3001, () => {
	console.log('App works! on 3001 port');
});
