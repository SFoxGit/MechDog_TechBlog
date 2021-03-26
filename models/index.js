const User = require('./user');
const Blogs = require('./blogs');
const Comments = require('./comments');

User.hasMany(Blogs, {
  foreignKey: 'user_id',
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
});

Blogs.belongsTo(User, {
  foreignKey: 'user_id'
});

Blogs.hasMany(Comments, {
  foreignKey: 'blogs_id',
});

Comments.belongsTo(Blogs, {
  foreignKey: 'blogs_id',
});

Comments.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blogs, Comments};