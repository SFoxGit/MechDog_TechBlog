const router = require('express').Router();
const { Blogs, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
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

router.get('/blogs/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blogs.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    const blogs = JSON.parse(JSON.stringify(blogData));
    res.render('blogs', {
      blogs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
