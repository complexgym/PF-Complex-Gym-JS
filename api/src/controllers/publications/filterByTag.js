const { blog } = require("../../db")

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const filterByTag = async(req, res) => {
    try {
        const {tag} = req.params
        if (!tag) throw Error('no tag')

        // obtener todos los blogs
        const allPublications = await blog.findAll({})

        const filteredPublication = allPublications.filter(blog => blog.tag.includes(tag))

        res.status(200).json({
            route: 'filter by tag',
            tag,
            allPublications,
            filteredPublication
        })
    } catch (error) {
        res.status(400).json({
            route: 'fiter by tag',
            error: error.message
        })
    }
}

module.exports = filterByTag