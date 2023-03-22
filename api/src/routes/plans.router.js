const { Router } = require("express")

const {
    deletePlans,
    getAllPlans,
    updatePlans,
    postPlans
} = require("../controllers/index")

const router = Router()

router.get('/', async (req, res)=>{
    try {
        const responseAll = await getAllPlans();
        return res.json({
            responseAll
        })
      }catch (error) {
        res.status(400).send("Something went wrong");
      }
}) 

router.post('/', async(req, res)=>{
    try {
        const newPlans = await postPlans(req.body)
        res.status(200).json(newPlans)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const result = await deletePlans(req.params)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/:id', async (req, res)=>{
    const { id } = req.params
    const data = req.body

    try {
        const response = await updatePlans(id, data)

        return res.json({
            response
        })
    } catch (error) {
        return res.json({
            error: error.message
        })
    }
})

module.exports = router