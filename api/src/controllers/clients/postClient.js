const { client, activities } = require('../../db');

const postClient = async ({
	user,
	name,
	lastName,
	dni,
	picture,
	height,
	weight,
	age,
	phone,
	mail,
	address,
	city,
	region,
	postalCode,
	activitie,
	routine,
	about,
	trainer
}) => {
	const active = true;
	const debt = false;
	const debtAmount = 0;

	const newClient = await client.create({
		user,
		name,
		lastName,
		dni,
		picture,
		height,
		weight,
		age,
		phone,
		mail,
		address,
		city,
		region,
		postalCode,
		activitie,
		routine,
		about,
		active,
		debt,
		debtAmount,
		trainer
	});

	return newClient;
};

module.exports = postClient;
