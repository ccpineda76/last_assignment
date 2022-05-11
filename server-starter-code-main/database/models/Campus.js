const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageLink:{
    type: Sequelize.STRING,
    defaultValue: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHw%3D&w=1000&q=80',
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  }

});

module.exports = Campus;