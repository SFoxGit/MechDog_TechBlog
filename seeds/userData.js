const { User } = require('../models');

const userdata = [
  {
    "name": "Shawn Fox",
    "email": "sfoxss4@gmail.com",
    "password": "password1234"
  },
  {
    "name": "Joe Xample",
    "email": "joexample@email.com",
    "password": "password5432"
  },
  {
    "name": "Linda Hand",
    "email": "lendahand@email.com",
    "password": "password8888"
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;