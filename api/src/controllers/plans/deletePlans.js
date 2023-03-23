const { plans } = require("../../db")


const deletePlans = async ({id}) => {
    try {
        await plans.destroy({
            where: {
                id: id,
            }
        })
        return "Delete Succesfull"
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = deletePlans
