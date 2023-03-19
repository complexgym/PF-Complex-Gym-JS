const { trainer } = require('../../db');

const getTrainerById = async(id) => {

    const response = await trainer.findByPk(id);
    return response;
  };

module.exports = getTrainerById;