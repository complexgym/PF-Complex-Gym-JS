import { Router } from "express"
const router = Router()

import clients from './clients.router'
import activities from './activities.router'

router.use('/clients', clients)
router.use('/activities', activities)

export default router