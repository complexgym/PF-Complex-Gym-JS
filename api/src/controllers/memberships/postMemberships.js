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

    console.log(clientId);
    console.log(planName);
    console.log(price);
    console.log(startDate);
    console.log(paymentId);
    
	/*const newMemberships = await memberships.create({
	clientId,
    planName,
    activities,
    price,
    startDate,
    finishDate,
    paymentId,
	});
	return newMemberships;*/
};

module.exports = postMemberships;
