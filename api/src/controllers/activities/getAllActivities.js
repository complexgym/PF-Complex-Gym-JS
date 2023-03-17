const { activities } = require("../../db")

const getAllActivities = async () => {
    const response = await activities.findAll();
    return response;
};


module.exports = getAllActivities;