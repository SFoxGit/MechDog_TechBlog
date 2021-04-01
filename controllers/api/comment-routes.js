const router = require('express').Router();
const { User, Blogs, Comments } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const commentData = await Comments.create({
      message: req.body.message,
      user_id: req.session.user_id,
      blogs_id: req.body.blogId
    })
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
})

module.exports = router;