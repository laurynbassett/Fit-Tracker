const express = require('express')
const { Exercise, Workout } = require('../database')
const router = express.Router()

// GET all exercises
router.get('/', async (req, res, next) => {
  try {
    res.json(await Exercise.findAll())
  } catch (err) {
    next(err)
  }
})

// GET a single exercise by id
router.get('/:id', async (req, res, next) => {
  try {
    const exercise = await Exercise.findByPk(+req.params.id)
    if (!exercise) return res.sendStatus(404)
    res.json(exercise)
  } catch (err) {
    next(err)
  }
})

// PUT a single exercise by id
router.put('/:id', async (req, res, next) => {
  try {
    const exercise = await Exercise.findByPk(+req.params.id)
    if (!exercise) return res.sendStatus(404)
    const [ numUpdated, updatedExercise ] = await Exercise.update(req.body, {
      where: { id: +req.params.id },
      returning: true
    })
    console.log('ROUTE UPDATED EXERCISE: ', updatedExercise[0].dataValues)
    res.json(updatedExercise[0].dataValues)
  } catch (err) {
    next(err)
  }
})

// POST a new exercise
router.post('/', async (req, res, next) => {
  try {
    console.log('REQ PARAMS', req.body)
    const { name, completed, description, duration, workout } = req.body
    res.status(201)
    const exercise = await Exercise.create({ name, completed, description, duration, workoutId: workout.id })
    console.log(exercise)
    // await exercise.setWorkout(workout)
    res.json(exercise)
  } catch (err) {
    next(err)
  }
})

// DELETE an exercise by id
router.delete('/:id', async (req, res, next) => {
  try {
    const exercise = await Exercise.findByPk(+req.params.id)
    if (!exercise) return res.sendStatus(404)
    await exercise.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

module.exports = router
