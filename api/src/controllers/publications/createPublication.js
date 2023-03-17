const { blog } = require("../../db")


const createPublication = async (req, res) => {
    try {
        const {
            authorId,
            title,
            content,
            image,
            tag
        } = req.body
        const newPublication = await blog.create({
            authorId,
            title,
            content,
            image,
            tag
        })

        //falta crear la relacion con trainer

        res.status(200).send(newPublication)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = createPublication