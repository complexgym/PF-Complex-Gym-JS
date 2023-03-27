const { memberships } = require('../../db');

const postMemberships = async ({
	clientId,
    planName,
    activities,
    price,
    startDate,
    finishDate,
    paymentId,
}) => {    
	const newMemberships = await memberships.create({
	clientId,
    planName,
    activities,
    price,
    startDate,
    finishDate,
    paymentId,
	});
	return newMemberships;
};

module.exports = postMemberships;
