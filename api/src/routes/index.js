const { Router } = require("express")
const router = Router()

const clients = require('./clients.router')
const activities = require('./activities.router')
const publications = require('./publications.router')
const memberships = require("./memberships.router")
const trainer = require('./trainer.router')

router.use('/clients', clients)
router.use('/activities', activities)
router.use('/publications', publications)
router.use('/menberships',memberships)
router.use('./trainer', trainer)

module.exports = router