const { Router } = require("express")
const router = Router()

const clients = require('./clients.router')
const activities = require('./activities.router')
const publications = require('./publications.router')
const memberships = require("./memberships.router")
const trainer = require('./trainer.router')
const admin = require("./admin.router")

router.use('/clients', clients)
router.use('/activities', activities)
router.use('/publications', publications)
router.use('/menberships',memberships)
router.use('./trainer', trainer)
router.use('/admin', admin)

module.exports = router