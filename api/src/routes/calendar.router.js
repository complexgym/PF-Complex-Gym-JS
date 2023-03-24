const { Router } = require("express")

const router = Router()

const { getAllCalendar, postCalendar } = require('../controllers/index')

router.get('/', async(req, res) => {
    try {
        const response = await getAllCalendar(req.body)

        if(response.error) throw Error(response.error.message)

        res.json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


// req.body => { day : number, month: number , year: number , hour: string , class: string }
router.post('/',async (req, res) => {
    try {
        const { day, month, year, hour} = req.body
        if (!day || !month || !year || !hour) throw Error('missing data')
        if (!req.body.class) throw Error('missing data')

        const validatorHour = hour.split(':')
        if (validatorHour.length !== 2) throw Error('error invalid hour')
        if (
            isNaN(Number(validatorHour[0])) ||
            isNaN(Number(validatorHour[1]))
        ) throw Error('error invalid hour')

        const response = await postCalendar(req.body)

        if (response.error) throw Error(response.error)

        res.status(200).json(response)
    } catch (error) {
        // console.log(error)
        res.status(400).json({
            error: error.message
        })
    }
})

module.exports = router