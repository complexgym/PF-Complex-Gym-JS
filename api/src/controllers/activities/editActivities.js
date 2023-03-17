const { activities } = require("../../db");

const editActivities = async (req, res) => {
  const { id } = req.params;
  const { 
    name, 
    description, 
    days, 
    schedule, 
    trainerId, 
    clientId } = req.body;

  try {
    const activity = await activities.findOne({ where: { id } });

    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    await activities.update(
      { name, 
        description, 
        days, 
        schedule, 
        trainerId, 
        clientId 
    },
      { where: { 
        id:id 
    } 
    });

    const updatedActivity = await activities.findOne({ where: { id } });
    if(updatedActivity){
        res.status(200).send("Activity edited");
    }else{
        res.status(400).send(error.message)
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = editActivities;