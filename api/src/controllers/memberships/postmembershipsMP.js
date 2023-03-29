const { memberships } = require("../../db");

const postMembershipsmp = async ({ clientId, planName, price, paymentId }) => {
	const newMemberships = await memberships.create({
		clientId,
		planName,
		price,
		paymentId,
	});
	return newMemberships;
};

module.exports = postMembershipsmp;
