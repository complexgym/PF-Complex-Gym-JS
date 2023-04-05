const { blog } = require("../../db")

const createPublication = async (req, res) => {
    try {
        const {
            title,
            content,
            image,
            tag,
            author_name,
            author_picture,
            isInstagram
        } = req.body

        console.log(req.body);

        const newPublication = await blog.create({
            title,
            content,
            image,
            tag,
            author_name,
            author_picture,
            isInstagram
        })

        res.status(200).send(newPublication)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = createPublication