const { Router } = require('express')
const router = Router()

const {postPayments, getFeedback, postNotification, getAllPayments,getPaymentsById} = require('../controllers/index')

router.get('/', async(req, res)=>{
    try {
        const responseAll = await getAllPayments()
          return res.status(200).send(responseAll);
      }catch (error) {
        res.status(400).send("Something went wrong");
}})

router.post('/', postPayments)

router.get('/:id', async(req, res)=>{
    const { id } = req.params;
  try {
    let clientid = await getPaymentsById(id);
      return res.status(200).send(clientid);
  }catch (error) {
    res.status(400).send("Something went wrong");
  }
})

router.get('/feedback', getFeedback)

router.post('/notification', postNotification)

module.exports = router