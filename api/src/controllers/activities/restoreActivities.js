const { activities } = require("../../db")

const restoreActivities = async ({id}) => {
  try {
    const [restoredRows] = await activities.restore({
      where: {
        id: id
      }
    })
    if (restoredRows === 0) {
      return "Activity not found or already restored"
    }
    return "Activity restored successfully"
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = restoreActivities;