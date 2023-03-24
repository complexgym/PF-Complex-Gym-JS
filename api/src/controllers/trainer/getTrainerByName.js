const { trainer } = require('../../db');

const getTrainerByName = async (name) => {

    try {
        const response = await trainer.findAll({
            where:{
                name: name
            }
        })

        if (response.length === 0) throw Error('Trainer name not found')
        return response;

    } catch (error) {
        return {error: error.message};
    }
};

module.exports = getTrainerByName;