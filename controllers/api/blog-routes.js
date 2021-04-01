const router = require('express').Router();
const { User, Blogs, Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
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

router.put('/:id', withAuth, async (req, res) => {
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

router.get('/:id', withAuth, async (req, res) => {
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
    res.render('edit', {
      blogs,
      comments,
      loggedIn: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/view/:id', withAuth, async (req, res) => {
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
      loggedIn: true,
      id: req.session.user_id
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const blogData = await Blogs.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!blogData) {
      res.status(404).json({ message: "no blog found with that id!" });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;