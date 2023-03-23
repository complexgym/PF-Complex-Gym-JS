const { testimonials } = require("../../db")


const deleteTestimonials = async (req, res) => {
    try {

        const { id } = req.params

        await testimonials.destroy({
            where: {
                id: id,
            }
        })

        res.status(200).send("Delete Succesfull")  
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = deleteTestimonials