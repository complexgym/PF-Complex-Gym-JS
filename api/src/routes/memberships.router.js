const { Router } = require("express")

const {
    getAllMemberships,
    postMemberships,
    deleteMemberships,
    updateMemberships,
    getMembershipsById
} = require("../controllers/index")

const router = Router()

router.get('/', async (req, res)=>{
try{
    const responseAll = await getAllMemberships()
    return res.status(200).send(responseAll);
}catch (error) {
    res.status(400).send("Something went wrong");
  }
})

router.get('/:clientId', async(req, res)=>{
    const { clientId } = req.params;
  try {
    let MembershipsId = await getMembershipsById(clientId);
      return res.status(200).send(MembershipsId);
  }catch (error) {
    res.status(400).send("Something went wrong");
  }
})


router.post('/', async(req, res)=>{
    try {
        const newMemberships = await postMemberships(req.body)
        res.status(200).json(newMemberships)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})

router.delete('/:clientId', async(req, res) => {
    try {
        const result = await deleteMemberships(req.params)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/:id', async (req, res)=>{
    const { id } = req.params
    const data = req.body

    try {
        const response = await updateMemberships(id, data)

        return res.json({
            response
        })
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
})

module.exports = router