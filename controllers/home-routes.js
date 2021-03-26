const router = require('express').Router();
const { Blogs, User, Comments } = require('../models');
const withAuth = require('../utils/auth');


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
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/blogs/:id', async (req, res) => {
  try {
    const blogData = await Blogs.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          attributes: ['username']
        },
      ]
    });
    const commentsData = await Comments.findAll({
      where: { blogs_id: req.params.id },
      include: [
        {
          model: User,
          attributes: ['username']
        },
      ]
    });
    const comments = await JSON.parse(JSON.stringify(commentsData));
    const blogs = await JSON.parse(JSON.stringify(blogData));
    res.render('blogs', {
      blogs,
      comments,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/dashboard', withAuth, async (req, res) => {
  try {
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
      loggedIn: true,
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
    res.render('newBlog', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
