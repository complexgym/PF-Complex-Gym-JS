const { Router } = require("express")
const router = Router()

const clients = require('./clients.router')
const activities = require('./activities.router')

router.use('/clients', clients)
router.use('/activities', activities)

module.exports = router