const {Router} = require('express')
const router = Router()

const {sendMail} = require('../controllers/index')

router.post('/sendmail', async(req, res)=>{
    try {

        // console.log(req.body)
        // console.log(req.query)

        if (!req.query.type) throw Error('missing data query')
        if(!req.body) throw Error('missing data body')

        const response = await sendMail(req.body, req.query)
        if (response.error) throw Error(response.error)
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