const { Router } = require('express')
const router = Router()

const {postPaymentsMP} = require('../controllers/index')

router.get('/', (req, res)=>{})

router.post('/', (req, res)=>{
    try {
        res.json({
            message: 'ruta pago mercado pago - POST'
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.get('/feedback', (req, res)=>{
    res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
})

module.exports = router