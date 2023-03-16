import { Router } from "express"
import getActivitiesById from '../controllers/activities/getActivitiesById'
import getActivitiesByName from "../controllers/activities/getActivitiesByName"
import getAllActivities from "../controllers/activities/getAllActivities"

const router = Router()

/*
GET - all activities
GET - find by name
*/

router.get('/', (req, res)=>{})
router.get('/:id', (req, res)=>{})
router.get('/:name', (req, res)=>{})

export default router