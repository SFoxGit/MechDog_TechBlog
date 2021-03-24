const { Blogs } = require('../models');

const blogdata = [
  {
    title: 'Is JQuery worth it?',
    user_id: 1,
    message: 'If your web application requires quite a bit of js, then certainly. I much prefer the dom manipulation in JQuery to vanilla.',
  },
  {
    title: 'Bootstrap is the best CSS framework',
    user_id: 2,
    message: 'The grid system is so intuitive. This allows for even a beginner to be able to create great looking sites.',
  },
  {
    title: 'Bitcoin ruined the future of gaming',
    user_id: 3,
    message: 'Bitcoin caused the GPU prices to skyrocket on the 3xxx series GPUs. I cannot find a 3060, anywhere',
  },
];

const seedBlogs = () => Blogs.bulkCreate(blogdata);

module.exports = seedBlogs;