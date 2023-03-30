const { calendardate } = require("../../db")

const restoreCalendar = async ({id}) => {
  try {
    const [restoredRows] = await calendardate.restore({
      where: {
        id: id
      }
    })
    if (restoredRows === 0) {
      return "Calendar date not found or already restored"
    }
    return "Calendar date restored successfully"
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = restoreCalendar;