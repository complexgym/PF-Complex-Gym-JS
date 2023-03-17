const { activities } = require('../../db');

const postActivities = async (req, res) => {
    const { 
        name, 
        description, 
        days, 
        schedule, 
        trainerId, 
        clientId } = req.body;
    
    const newActivity = await activities.create({
      name,
      description,
      days,
      schedule,
      trainerId,
      clientId
    })

    return newActivity;
 
}


module.exports = postActivities;