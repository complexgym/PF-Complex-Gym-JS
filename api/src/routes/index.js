const { Router } = require("express")
const router = Router()

const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
  audience: "https://complex/api",
  issuerBaseURL: "https://dev-o2lihq5f3ltnq4we.us.auth0.com/",
  // tokenSigningAlg: "HS256"
});

const clients = require('./clients.router')
const activities = require('./activities.router')
const publications = require('./publications.router')
const memberships = require("./memberships.router")
const trainer = require('./trainer.router')
const payments = require('./payments.router')
const admin = require('./admin.router')
const testimonials = require('./testimonials.router')
const plans = require('./plans.router')
const mails = require('./mails.router')
const calendar = require('./calendar.router')

router.use('/clients', clients)
router.use('/activities', activities)
router.use('/publications', publications)
router.use('/trainer', trainer)
// router.use('/payments', payments)
router.use('/menberships',memberships)
router.use('/trainer', trainer)
router.use('/admin', admin)
router.use('/testimonials', checkJwt, testimonials)
router.use('/plans', plans)
router.use('/mail', mails)

router.use('/calendar', calendar)

module.exports = router