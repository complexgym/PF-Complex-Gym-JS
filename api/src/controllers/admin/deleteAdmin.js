const { admin } = require("../../db")


const deleteAdmin = async (req, res) => {
    try {

        const { id } = req.params

        const find = await admin.findOne({ where: id })

        if(find){
            await admin.destroy({
                where: {
                    id: id,
                }
            })
        }
        else throw new Error("Admin not found")

        res.status(200).send("Delete Succesfull")  
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = deleteAdmin