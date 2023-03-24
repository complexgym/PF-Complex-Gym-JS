const { trainer } = require('../../db');

const deleteTrainer = async ({id}) => {
    try {
        await trainer.destroy({
            where: {
                id: id,
            }
        })
        return "Trainer deleted"
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = deleteTrainer;