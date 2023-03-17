const { Router } = require("express")

const {
    deleteClient,
    postClient,
    getClientByName,
    updateClientById
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

// TEST DATA
//const {testData} = require('../dataTest/index.test')

router.get('/', async (req, res)=>{
    const { name } = req.query

    // FIND BY NAME CASE
    if (name && typeof name === 'string') {
        const response = await getClientByName(name)
        return res.json({
            message: 'find by name',
            response
        })
    }
    // TEST DATA
    // testData()
    res.json({
        message: 'find all clients'
    })
}) 
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

router.put('/:id', async (req, res)=>{
    const { id } = req.params
    const data = req.body

    try {
        const response = await updateClientById(id, data)

        return res.json({
            message: 'ruta update funca1',
            response
        })
    } catch (error) {
        return res.json({
            message: 'algo salio mal',
            error: error.message
        })
    }
})

module.exports = router