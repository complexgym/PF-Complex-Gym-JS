const { Router } = require("express")
const {
    getAllActivities,
    getActivitiesById,
    getActivitiesByName,
    postActivities,
    editActivities,
    deleteActivities
} = require("../controllers/index")

const router = Router()

router.get('/', async (req, res) => {
    try {
      const activities = await getAllActivities();
      res.status(200).json( activities );
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  });

router.get('/name', async (req, res) => {
    try {
      const activities = await getActivitiesByName(req.query.name);
      res.status(200).json(activities );
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: ' Error' });
    }
  });

router.get('/:id', async (req, res) => {
  try {
    const activity = await getActivitiesById(req.params.id);
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }
    res.status(200).json(activity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});


router.post('/' , async (req, res) => {
  try{
    const newActivity = await postActivities(req.body)
    res.status(201).json( newActivity );

  }catch (error) {
  console.log(error);
  res.status(500).json({ error: 'Server Error' });
}
})

router.put('/:id', editActivities);

router.delete('/:id', deleteActivities);

module.exports = router