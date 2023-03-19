const { trainer } = require('../../db');

const getAllTrainers = async() => {

    try {
        const response = await trainer.findAll()

        if (response.length === 0) throw Error('Trainers not found')
        return response;

    } catch (error) {
        return {error: error.message}
    }
};

module.exports = getAllTrainers;