import express from 'express'

import {signin, signup} from '../controllers/user.js'

const router = express.Router()

router.post('/signin', signin) //post becuase sending data to backend (from login to backend)
router.post('/signup', signup)
export default router;