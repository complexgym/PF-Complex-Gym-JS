const { Router } = require("express")

const router = Router()

/*
GET - all activities
GET - find by name
*/

router.get('/', (req, res)=>{})
router.get('/:id', (req, res)=>{})
router.get('/:name', (req, res)=>{})

module.exports = router