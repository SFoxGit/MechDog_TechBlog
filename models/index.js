const User = require('./Users');
const Blog = require('./Blogs');
const Comments = require('./Comments');

User.hasMany(Blog, {
  foreignKey: 'user_id',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.hasMany(Comments, {
  foreignKey: 'blog_id',
});

Comments.