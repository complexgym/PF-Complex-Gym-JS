const { Router } = require("express")

const {
    deleteAdmin,
    getAllAdmins,
    postAdmin,
    putAdmin
} = require("../controllers/index")

const router = Router()

router.get("/", getAllAdmins)
router.post("/", postAdmin)
router.delete('/:id', deleteAdmin)
router.put('/:id', putAdmin)

module.exports = router