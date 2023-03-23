const { plans } = require('../../db');

const postPlans = async ({
	id,
	name,
	tags,
	price,
}) => {

	const newPlans = await plans.create({
		id,
	    name,
    	tags,
	    price,
	});

	return newPlans;
};

module.exports = postPlans;