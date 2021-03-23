const router = require('express').Router();
const { Blogs, Comments } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blogs.findAll({
      include: [
        {
          model: Comments,
          attributes: []
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