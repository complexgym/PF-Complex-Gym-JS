const { testimonials } = require("../../db")

const getAllTestimonials = async (req, res) => {
    try {
        const alltestimonials = await testimonials.findAll({})
        res.status(200).send(alltestimonials)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = getAllTestimonials