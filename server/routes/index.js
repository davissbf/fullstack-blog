import express from 'express';
import { getPost } from '../controller/index.js';

const router = express.Router();

router.get('/', getPost, (req, res) => {
  console.log('asdasdad');
});

export default router;
