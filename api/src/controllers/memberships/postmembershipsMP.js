const { memberships } = require("../../db");

const postMembershipsmp = async ({ clientId, planName, price, paymentId,startDate }) => {    
	const newMemberships = await memberships.create({
	clientId,
    planName,
    price,
	paymentId,
	startDate,
	});
	return newMemberships;
};

module.exports = postMembershipsmp;
