const { memberships } = require("../../db")


const deleteMemberships = async ({clientId}) => {
    try {
        await memberships.destroy({
            where: {
                clientId: clientId,
            }
        })
        return "Delete Succesfull"
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = deleteMemberships
