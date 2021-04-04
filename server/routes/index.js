import express from 'express';
import {
  getPosts,
  createPost,
  getSinglePost,
  updatePost,
  deletePost
} from '../controller/index.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/', getSinglePost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
