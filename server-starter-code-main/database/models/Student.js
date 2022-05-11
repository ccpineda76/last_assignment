const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageLink:{
    type: Sequelize.STRING,
    defaultValue: 'https://www.thehumancapitalhub.com/uploads_users/avarter.jpg',
  },

  email: {
    type: Sequelize.STRING,
  },

  gpa: {
    type: Sequelize.STRING,
  }
});

module.exports = Student;