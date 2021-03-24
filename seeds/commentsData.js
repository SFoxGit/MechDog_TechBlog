const { Comments } = require('../models');

const commentsdata = [
  {
    blog_id: 2,
    user_id: 1,
    message: 'I agree, bootstrap is great! I forgot how to do normal css.',
  },
  {
    blog_id: 3,
    user_id: 2,
    message: 'You do not need the 3k series for the current games on the market.',
  },
  {
    blog_id: 1,
    user_id: 3,
    message: 'It is too much script for most applications!',
  },
];

const seedComments = () => Comments.bulkCreate(commentsdata);

module.exports = seedComments;