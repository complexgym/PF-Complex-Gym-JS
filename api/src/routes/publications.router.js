const { Router } = require("express")

const {
    createPublication,
    deletePublication,
    editPublication,
    getAllPublications,
    getPublicationsByID,
    getPublicationsByName,
    filterByDate,
    filterByTag
} = require("../controllers/index")

const router = Router()

router.get('/all', getAllPublications)
router.get('/:id', getPublicationsByID)
router.get('/', getPublicationsByName)

// FILTER BLOG
router.get('/filters/tag/:tag', filterByTag)
router.get('/filters/date/:date', filterByDate)

router.post("/", createPublication)
router.delete('/:id', deletePublication)
router.put('/:id', editPublication)

module.exports = router