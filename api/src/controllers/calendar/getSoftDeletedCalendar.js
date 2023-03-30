const { calendardate } = require('../../db');
const { Op } = require('sequelize');

const getSoftDeletedCalendar = async () => {
  return await calendardate.findAll({ 
    paranoid: false,
    where: { 
      deletedAt: { 
        [Op.not]: null 
      }
    } 
  });
}

module.exports = getSoftDeletedCalendar;