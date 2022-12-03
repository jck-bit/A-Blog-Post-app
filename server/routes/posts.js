import express from 'express';
import {getFeedPosts, getUserPosts, likePost} from '../controllers/posts.js';
import { VerifyJWT } from '../middleware/authMiddleware.js';

const router = express.Router()

router.get("/", VerifyJWT, getFeedPosts);
router.get("/:userId/posts", VerifyJWT,getUserPosts);
router.patch("/:id/like", VerifyJWT, likePost)

export default router
