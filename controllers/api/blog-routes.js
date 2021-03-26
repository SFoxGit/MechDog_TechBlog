const router = require('express').Router();
const { Blogs } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const blogData = await Blog.create({
      title: req.body.title,
      user_id: req.session.user_id,
      message: req.body.message,
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const blogData = await Blogs.update(req.body,
      {
        where: {
          id: req.params.id,
        }
      });
    res.json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
})


module.exports = router;