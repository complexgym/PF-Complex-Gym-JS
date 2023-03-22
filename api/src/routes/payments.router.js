const { Router } = require('express')
const router = Router()

const {postPayments, getFeedback} = require('../controllers/index')

//router.get('/', (req, res)=>{})

router.post('/', postPayments)

router.get('/feedback', getFeedback)

module.exports = router