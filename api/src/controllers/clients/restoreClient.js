const { client } = require("../../db")

const restoreClient = async ({id}) => {
  try {
    const [restoredRows] = await client.restore({
      where: {
        id: id
      }
    })
    if (restoredRows === 0) {
      return "Client not found or already restored"
    }
    return "Client restored successfully"
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = restoreClient;