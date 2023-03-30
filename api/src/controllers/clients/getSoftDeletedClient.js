const { client } = require('../../db');
const { Op } = require('sequelize');

const getSoftDeletedClient = async () => {
  return await client.findAll({ 
    paranoid: false,
    where: { 
      deletedAt: { 
        [Op.not]: null 
      }
    } 
  });
}

module.exports = getSoftDeletedClient;