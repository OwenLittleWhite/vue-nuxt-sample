import { Router } from 'express'

import users from './users'
import pics from './pics'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(pics)

export default router
