const Sequelize = require('sequelize')
const databaseUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/fit-tracker'
const db = new Sequelize(databaseUrl, {
  logging: false,
  operatorsAliases: '0'
})

const Workout = db.define('workout', {
  name: Sequelize.STRING,
  date: Sequelize.DATE
})

const Exercise = db.define('exercise', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  completed: Sequelize.BOOLEAN,
  duration: Sequelize.INTEGER
})

Workout.hasMany(Exercise)
Exercise.belongsTo(Workout)

module.exports = {
  Workout,
  Exercise,
  db
}
