// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection');

// class BlogsComments extends Model {}

// BlogsComments.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     blogs_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'blogs',
//         key: 'id',
//       },
//     },
//     comments_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'comments',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'blogscomments',
//   }
// );

// module.exports = BlogsComments;
