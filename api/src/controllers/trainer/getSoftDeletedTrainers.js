const { trainer } = require('../../db');
const { Op } = require('sequelize');

const getSoftDeletedTrainers = async () => {
  return await trainer.findAll({ 
    paranoid: false,
    where: { 
      deletedAt: { 
        [Op.not]: null 
      }
    } 
  });
}

module.exports = getSoftDeletedTrainers;