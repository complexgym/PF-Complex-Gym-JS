const { memberships } = require('../../db');

const postMemberships = async ({
	clientid,
    planName,
    activities,
    price,
    startDate,
    finishDate,
    paymentId,
}) => {

	const newMemberships = await memberships.create({
	clientid,
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
