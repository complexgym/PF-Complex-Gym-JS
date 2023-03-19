const { trainer } = require('../../db');

const editTrainer = async (id, newData) => {
    try {
        const response = await trainer.update(newData, {
            where: {
                id: id
            }
        })

        if (response[0] === 0) throw Error('No trainer with that ID')

        const trainerResponse = await trainer.findByPk(id)
        
        return trainerResponse

    } catch (error) {
        return {error: error.message}
    }
};

module.exports = editTrainer;