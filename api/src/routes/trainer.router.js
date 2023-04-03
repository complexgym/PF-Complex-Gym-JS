const { Router } = require("express")
const {
    deleteTrainer,
    postTrainer,
    getTrainerByName,
    editTrainer,
    getAllTrainers,
    getTrainerById,
    restoreTrainer,
    getSoftDeletedTrainers
} = require("../controllers/index")

const router = Router()

router.get('/', async (req, res)=>{
    const { name } = req.query
    try {
        if (name && typeof name === 'string') {
        const trainer = await getTrainerByName(name);
        res.status(200).json(trainer);

        }else{
            const AllTrainers = await getAllTrainers()
            res.status(200).json(AllTrainers);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
}

});
    

router.get('/id', async(req, res)=>{
    const { id } = req.params;
  try {
    let trainerId = await getTrainerById(id);
    if(trainerId){
      return res.status(200).send(trainerId);
    }else{
      return res.status(400).send('No trainer with that Id');
    };
  }catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
})

router.post('/', async(req, res)=>{
    try {
        const newTrainer = await postTrainer(req.body)
        res.status(200).json(newTrainer)
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Server Error' });
    }
})



router.put('/:id', async (req, res)=>{
    const { id } = req.params
    const data = req.body

    try {
        const response = await editTrainer(id, data)

        return res.status(200).json(response)
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
})

router.delete('/:id', async(req, res) => {
  try {
    const result = await deleteTrainer(req.params)
    res.status(200).send(result)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.put('/restore/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await restoreTrainer({ id });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
})

router.get('/softDeleted', async (req, res) => {
  try {
    const deletedTrainers = await getSoftDeletedTrainers();
    res.status(200).json(deletedTrainers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router