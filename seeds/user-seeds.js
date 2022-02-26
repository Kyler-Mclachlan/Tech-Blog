const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'AndrewM',
    email: 'andrew.mclachlan@gmail.com',
    password: 'password123'
  },
  {
    username: 'MarielleD',
    email: 'mDateo015@gmail.com',
    password: 'password123'
  }
];


const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
