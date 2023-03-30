const { admin } = require('../../db');
const { Op } = require('sequelize');

const getSoftDeletedAdmin = async () => {
  return await admin.findAll({ 
    paranoid: false,
    where: { 
      deletedAt: { 
        [Op.not]: null 
      }
    } 
  });
}

module.exports = getSoftDeletedAdmin;