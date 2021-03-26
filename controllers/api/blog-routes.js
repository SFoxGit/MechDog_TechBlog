const router = require('express').Router();
const { Blogs } = require('../../models');

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