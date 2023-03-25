const { admin } = require("../../db")


const deleteAdmin = async (req, res) => {
    try {

        const { id } = req.params
        await admin.destroy({
            where: {
                id: id,
            }
        })

        res.status(200).send("Delete Succesfull")  
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = deleteAdmin