const { testimonials } = require("../../db")


const postTestimonials = async (req, res) => {
    try {
        const {
            url,
            name,
            text
        } = req.body
        const newTestimonials = await testimonials.create({
            url,
            name,
            text
        })

        res.status(200).send(newTestimonials)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = postTestimonials