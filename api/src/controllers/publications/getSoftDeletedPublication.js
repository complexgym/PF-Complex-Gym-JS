const { blog } = require('../../db');

const getSoftDeletedPublication = async () => {
  return await blog.findAll({ 
    paranoid: false,
    where: { 
      deletedAt: { 
        [Op.not]: null 
      }
    } 
  });
}

module.exports = getSoftDeletedPublication;