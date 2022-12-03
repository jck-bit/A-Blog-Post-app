import express from 'express'
import {getUser, getUserFriends, addRemoveFriend} from '../controllers/users.js'
import { VerifyJWT } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get("/:id", VerifyJWT,getUser)
router.get("/:id/friends", VerifyJWT, getUserFriends)

//update
router.patch("/:id/:friends", VerifyJWT, addRemoveFriend)
export default router;