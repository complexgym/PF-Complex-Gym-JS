const { Router } = require("express")
const router = Router()

const clients = require('./clients.router')
const activities = require('./activities.router')
const publications = require('./publications.router')

router.use('/clients', clients)
router.use('/activities', activities)
router.use('/publications', publications)

module.exports = router