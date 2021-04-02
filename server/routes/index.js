import express from 'express';
import { getPosts, createPost, getSinglePost } from '../controller/index.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/', getSinglePost);
router.post('/', createPost);

export default router;
