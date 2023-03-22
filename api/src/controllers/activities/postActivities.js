const { activities } = require('../../db');

const postActivities = async ({ 
    name, 
    description, 
    days, 
    schedule, 
    trainerId, 
    clientId,
    image 
  }) => {
    
    const newActivity = await activities.create({
      name,
      description,
      days,
      schedule,
      trainerId,
      clientId,
      image
    })

    return newActivity;
 
}


module.exports = postActivities;