const { Router } = require("express")

const {
    deleteAdmin,
    getAllAdmins,
    postAdmin,
    putAdmin,
    restoreAdmin,
} = require("../controllers/index")

const router = Router()

router.get("/", getAllAdmins)
router.post("/", postAdmin)
router.delete('/:id', deleteAdmin)
router.put('/:id', putAdmin)

router.put('/restore/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const result = await restoreAdmin({ id });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  });

module.exports = router