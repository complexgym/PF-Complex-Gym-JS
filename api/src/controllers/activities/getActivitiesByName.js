const { activities } = require("../../db")

const getActivitiesByName = async (name) => {
    const response = await activities.findAll({
      where: {
        name: name,
      },
    });
    return response;
  };
module.exports = getActivitiesByName;
