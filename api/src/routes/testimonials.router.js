const { Router } = require("express")

const {
    getAllTestimonials,
    deleteTestimonials,
    postTestimonials,
    putTestimonials
} = require("../controllers/index")

const router = Router()

router.get("/", getAllTestimonials)
router.post("/", postTestimonials)
router.delete('/:id', deleteTestimonials)
router.put('/:id', putTestimonials)

module.exports = router