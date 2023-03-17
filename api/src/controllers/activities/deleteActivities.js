const { activities } = require('../../db');

const deleteActivities = async (req, res) => {
    
    try {
      const { id } = req.params;
      await activities.destroy({ 
        where: { 
            id: id
         } 
        })
      
    res.status(204).send("Activity deleted");

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = deleteActivities;