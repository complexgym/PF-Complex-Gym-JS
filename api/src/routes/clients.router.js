import { Router } from "express"
import getAllClients from "../controllers/clients/getAllClients"
import getClientById from "../controllers/clients/getClientById"
import getClientByName from "../controllers/clients/getClientByName"
import updateClientById from "../controllers/clients/updateClientById"

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

//router.get('/', (req, res)=>{})
//router.get('/:id', (req, res)=>{})

router.post('/', postClient)

router.delete('/:id', deleteClient)

//router.put('/:id', (req, res)=>{})

export default router