const { activities } = require("../../db")

const getActivitiesById = async (id) => {
    const activity = await activities.findByPk(id);
    return activity;
  };

module.exports = getActivitiesById
