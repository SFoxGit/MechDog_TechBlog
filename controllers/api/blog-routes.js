const router = require('express').Router();
const { Blogs } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const blogData = await Blogs.create({
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
    console.log(req.params.id, req.body);
    const blogData = await Blogs.update(req.body,
      {
        where: {
          id: req.params.id,
        }
      });
      console.log(blogData);
    res.json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
})


module.exports = router;