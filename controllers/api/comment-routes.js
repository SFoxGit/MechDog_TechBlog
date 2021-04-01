const router = require('express').Router();
const { User, Blogs, Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
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

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comments.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!commentData) {
      res.status(404).json({ message: "no comment found with that id!" });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;