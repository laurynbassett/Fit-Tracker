const Sequelize = require('sequelize')
const db = require('../database')

const Workout = db.define('workout', {
  name: Sequelize.STRING,
  date: Sequelize.DATE
})

module.exports = Workout
