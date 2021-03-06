const Exercise = require('./exercises')
const Activity = require('./activities')
const User = require('./user')
const Workout = require('./workouts')

// associations
Workout.hasMany(Exercise)
Exercise.belongsTo(Workout)

User.hasMany(Workout)
Workout.belongsTo(User)

// User.hasMany(Exercise)
// Exercise.belongsTo(User)

User.hasMany(Activity)
Activity.belongsTo(User)

module.exports = {
  Exercise,
  Activity,
  User,
  Workout
}
