const Exercise = require('./exercises')
const User = require('./user')
const Workout = require('./workouts')

// associations
Workout.hasMany(Exercise)
Exercise.belongsTo(Workout)

User.hasMany(Workout)
Workout.belongsTo(User)

User.hasMany(Exercise)
Exercise.belongsTo(User)

module.exports = {
  Exercise,
  User,
  Workout
}
