const { Router } = require("express")
const router = Router()

const clients = require('./clients.router')
const activities = require('./activities.router')
const publications = require('./publications.router')
const memberships = require("./memberships.router")
const trainer = require('./trainer.router')
// const payments = require('./payments.router')
const admin = require('./admin.router')
const testimonials = require('./testimonials.router')

router.use('/clients', clients)
router.use('/activities', activities)
router.use('/publications', publications)
router.use('/trainer', trainer)
// router.use('/payments', payments)
router.use('/menberships',memberships)
router.use('/trainer', trainer)
router.use('/admin', admin)
router.use('/testimonials', testimonials)

module.exports = router