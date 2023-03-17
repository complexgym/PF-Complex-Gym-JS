const { blog } = require("../../db")

const getPublicationsByName = async (req, res) => {
    try {
        const { title } = req.query
        console.log("getname")
        const allPublications = await blog.findAll({})
        let publicationName = await allPublications?.filter(el => el.title.toLowerCase().includes(title.toLowerCase()))
        res.status(200).send(publicationName)
    } catch (error) {
        console.log(error.message)
        res.status(404).json({error:error.message})
    }
}

module.exports = getPublicationsByName