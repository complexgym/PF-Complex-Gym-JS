const { Router } = require("express")

const {
    getAllTestimonials,
    deleteTestimonials,
    postTestimonials,
    putTestimonials,
    restoreTestimonials
} = require("../controllers/index")

const router = Router()

router.get("/", getAllTestimonials)
router.post("/", postTestimonials)
router.delete('/:id', deleteTestimonials)
router.put('/:id', putTestimonials)

router.put('/restore/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const result = await restoreTestimonials({ id });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  });

module.exports = router