const db = require('../database');

const getMessages = async (req, res, next) => {
	try {
		// GET ONLY 10 items
		// const messages = await db.execute(`SELECT * FROM messages LIMIT 10`);
		// GET ALL OF THEM AND MANAGE THEM ON THE FRONTNED
		const messages = await db.execute(`SELECT * FROM messages`);
		res.status(200).send({ data: messages[0] });
	} catch (err) {
		next(err);
	}
};

const createMessage = async (req, res, next) => {
	const { name, message } = req.body;
	try {
		await db.execute(
			`INSERT INTO messages(name, message) VALUES("${name}", "${message}")`,
		);
		res.status(201).send({data: `Message created: ${name}: ${message}`});
	} catch (err) {
		res.status(400).send({ data: 'Error' });
	}
};

module.exports = { getMessages, createMessage };
