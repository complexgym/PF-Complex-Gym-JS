const { Router } = require("express")

const {
    getAllTestimonials,
    deleteTestimonials,
    postTestimonials,
    putTestimonials,
    restoreTestimonials,
    getSoftDeletedTestimonials
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

  router.get('/softDeleted', async (req, res) => {
    try {
      const deletedTestimonials = await getSoftDeletedTestimonials();
      res.status(200).json(deletedTestimonials);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router