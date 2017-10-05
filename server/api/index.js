import { Router } from 'express'

import blogs from './blogs'

const router = Router()

// Add USERS Routes
router.use(blogs)

export default router
