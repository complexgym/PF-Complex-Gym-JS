const { blog } = require("../../db")

const getAllPublications = async (req, res) => {
    try {
        const allPublications = await blog.findAll({})
        res.status(200).send(allPublications)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = getAllPublications