const { blog } = require("../../db")

const getPublicationsByID = async (req, res) => {
    try {
        const { id } = req.params
        const Publication = await blog.findAll({
            where: {
                id:id
            }
        })
        res.status(200).send(Publication)
    } catch (error) {
        console.log(error.message)
        res.status(404).json({error:error.message})
    }
}

module.exports = getPublicationsByID