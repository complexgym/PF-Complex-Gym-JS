const { Router } = require("express")

const {
    createPublication,
    deletePublication,
    editPublication,
    getAllPublications,
    getPublicationsByID,
    getPublicationsByName
} = require("../controllers/index")

const router = Router()

router.get('/', (req, res)=>{})
router.get('/:id', (req, res)=>{})
router.get('/:name', )
router.post('/', )
router.delete('/:id', )
router.put('/:id', )

module.exports = router