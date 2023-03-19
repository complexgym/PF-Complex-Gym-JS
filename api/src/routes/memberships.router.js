const { Router } = require("express")

const {
    getAllMemberships,
    postMemberships,
    deleteMemberships,
    updateMemberships
} = require("../controllers/index")

const router = Router()

router.post('/', async(req, res)=>{
    try {
        const newMemberships = await postClient(req.body)
        res.status(200).json(newMemberships)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})

module.exports = router