const errorHandler = (err, req, res, next) => {
	const statusCode = err.statusCode || 500;

	const message =
		statusCode === 500 ? 'There is an error on the server' : err.message;
	res.status(statusCode).send({ message });
};

module.exports = errorHandler;