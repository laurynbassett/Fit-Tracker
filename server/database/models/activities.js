const Sequelize = require('sequelize')
const db = require('../database')

const Activity = db.define('activity', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  duration: Sequelize.INTEGER,
  date: Sequelize.DATE,
  time: Sequelize.TIME,
  completed: Sequelize.BOOLEAN
})

module.exports = Activity
