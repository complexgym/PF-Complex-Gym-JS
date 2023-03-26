const { admin } = require("../../db")

const restoreAdmin = async ({id}) => {
  try {
    const [restoredRows] = await admin.restore({
      where: {
        id: id
      }
    })
    if (restoredRows === 0) {
      return "Admin not found or already restored"
    }
    return "Admin restored successfully"
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = restoreAdmin;