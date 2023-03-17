const { client } = require("../../db")


const deleteClient = async ({id}) => {
    try {
        await client.destroy({
            where: {
                id: id,
            }
        })
        return "Delete Succesfull"
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = deleteClient
