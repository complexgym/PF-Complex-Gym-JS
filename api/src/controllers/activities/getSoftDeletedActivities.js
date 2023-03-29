const { activities } = require('../../db');

const getSoftDeletedActivities = async () => {
  return await activities.findAll({ 
    paranoid: false,
    where: { 
      deletedAt: { 
        [Op.not]: null 
      }
    } 
  });
}

module.exports = getSoftDeletedActivities;