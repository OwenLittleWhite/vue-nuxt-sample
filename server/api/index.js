import { Router } from 'express'

import blogs from './blogs'

const router = Router()

// Add BLOGS Routes
router.use(blogs)

export default router
