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
	address
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
        address
	});
	
    const Activities = await activities.findAll({
            where: {
                name : activities.name
            }
        })
        await newTrainer.addactivities(Activities)

	return newTrainer;
};

module.exports = postTrainer;