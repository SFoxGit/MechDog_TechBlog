const router = require('express').Router();
const { Blogs, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blogs.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
          
        },
      ],
    });
    const blogs = JSON.parse(JSON.stringify(blogData));
    res.render('homepage', {
      blogs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
