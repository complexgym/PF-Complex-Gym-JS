const { trainer, activities } = require('../../db');

const postTrainer = async ({
	user,
	name,
	lastName,
	picture,
	permits,
	classes,
	phone,
	mail,
	address,
	about
}) => {
	const newTrainer = await trainer.create({
		user,
		name,
		lastName,
		picture,
		permits,
		classes,
		phone,
		mail,
		address,
		about
	});

	return newTrainer;
};

module.exports = postTrainer;
