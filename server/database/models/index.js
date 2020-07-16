const Exercise = require('./exercises')
const User = require('./user')
const Workout = require('./workouts')

// associations
Workout.hasMany(Exercise)
Exercise.belongsTo(Workout)

module.exports = {
  Exercise,
  User,
  Workout
}
