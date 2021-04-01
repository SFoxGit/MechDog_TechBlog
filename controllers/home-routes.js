const router = require('express').Router();
const { Blogs, User, Comments } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const loggedIn = req.session.logged_in

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
      loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const loggedIn = req.session.logged_in

    const userBlogs = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Blogs,
        }
      ]
    });
    const userData = JSON.parse(JSON.stringify(userBlogs));
    res.render('dashboard', {
      userData,
      loggedIn
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

router.get('/newBlog', async (req, res) => {
  try {
    const loggedIn = req.session.logged_in

    res.render('newBlog', {
      loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
