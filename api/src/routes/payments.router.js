const { Router } = require('express')
const router = Router()
const mercadopago = require("mercadopago");

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_MP,
  });
const {postPayments, getFeedback} = require('../controllers/index')

//router.get('/', (req, res)=>{})

router.post('/', postPayments)

router.get('/feedback', getFeedback)

module.exports = router