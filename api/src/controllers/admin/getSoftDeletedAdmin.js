const { admin } = require('../../db');

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