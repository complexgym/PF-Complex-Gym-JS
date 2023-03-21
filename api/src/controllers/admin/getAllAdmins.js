const { admin } = require("../../db")

const getAllAdmins = async (req, res) => {
    try {
        const allAdmin = await admin.findAll({})
        res.status(200).send(allAdmin)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = getAllAdmins