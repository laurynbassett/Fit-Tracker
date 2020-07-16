const Sequelize = require('sequelize')
const db = require('../database')

const Exercise = db.define('exercise', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  completed: Sequelize.BOOLEAN,
  duration: Sequelize.INTEGER
})

module.exports = Exercise
