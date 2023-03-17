const { blog } = require("../../db")

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const filterByTag = async(req, res) => {
    try {
        // ej: date = '2023-03-17' => año-mes-fecha
        const {date} = req.params
        if (!date) throw Error('no date')

        // obtener todos los blogs
        const allPublications = await blog.findAll({})

        const filteredPublication = allPublications.filter(blog =>{
            const dateOrigin = new Date(blog.createdAt)
            const dateFilter = dateOrigin.toJSON().split('T')[0]
            console.log(dateFilter)
            return dateFilter === date
        })

        res.status(200).json({
            route: 'filter by date',
            date,
            allPublications,
            filteredPublication
        })
    } catch (error) {
        res.status(400).json({
            route: 'fiter by date',
            error: error.message
        })
    }
}

module.exports = filterByTag