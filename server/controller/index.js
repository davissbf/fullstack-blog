import Post from '../models/index.js';

export const getPost = async(req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch(error) {
    res.status(404).json({
      message: error.message,
    });
  };
};