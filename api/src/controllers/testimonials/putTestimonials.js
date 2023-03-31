const { testimonials } = require("../../db")


const putTestimonials = async (req, res) => {
    try {

        const { id } = req.params;
        
        const { 
            url,
            name,
            review,
            fav,
            rate
        } = req.body;
    
    
        await testimonials.update({
                url,
                name,
                review,
                fav,
                rate
            }, {
            where:{
                id: id
            }
        })

        res.status(200).send("Testimonial succesfully modificated")
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = putTestimonials