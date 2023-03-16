const { Router } = require("express")

const {
    deleteClient,
    postClient
} = require("../controllers/index")

const router = Router()

/*
GET - all clients
GET - id clients - detail
GET - find by name

POST - client

DELETE - deactivate client for id

PUT - update client for id
*/

router.get('/', (req, res)=>{}) 
//router.get('/:id', (req, res)=>{})

router.post('/', async(req, res)=>{
    try {
        const newClient = await postClient(req.body)
        res.status(200).json(newClient)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})

router.delete('/:id', deleteClient)

//router.put('/:id', (req, res)=>{})

module.exports = router