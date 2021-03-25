const { User } = require('../models');

const userdata = [
  {
    "username": "Shawn Fox",
    "email": "sfoxss4@gmail.com",
    "password": "password"
  },
  {
    "username": "Joe Xample",
    "email": "joexample@email.com",
    "password": "password"
  },
  {
    "username": "Linda Hand",
    "email": "lendahand@email.com",
    "password": "password"
  }
];

const seedUsers = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;