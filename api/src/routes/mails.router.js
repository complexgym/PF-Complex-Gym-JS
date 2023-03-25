const {Router} = require('express')
const router = Router()

const {sendMail} = require('../controllers/index')

router.post('/sendmail', async(req, res)=>{
    try {

        // console.log(req.body)

        console.log(await sendMail(req.body, req.query))
        res.json({
            message: 'mail enviado'
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
})

module.exports = router