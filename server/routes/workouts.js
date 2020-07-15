const express = require('express')
const { Exercise, Workout } = require('../database')
const router = express.Router()

// GET all workouts
router.get('/', async (req, res, next) => {
  try {
    const workouts = await Workout.findAll({ include: { model: Exercise } })
    if (!workouts) return res.sendStatus(404)
    res.json(workouts)
  } catch (err) {
    next(err)
  }
})

// GET a single workout by id
router.get('/:id', async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(+req.params.id)
    if (!workout) return res.sendStatus(404)
    res.json(workout)
  } catch (err) {
    next(err)
  }
})

// POST a new workout
router.post('/', async (req, res, next) => {
  try {
    console.log('REQ PARAMS', req.body)
    const { name, date } = req.body
    res.status(201)
    const workout = await Workout.create({ name, date })
    res.json(workout)
  } catch (err) {
    next(err)
  }
})

// PUT a single workout by id
router.put('/:id', async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(+req.params.id)
    if (!workout) return res.sendStatus(404)
    const [ numUpdated, updatedWorkout ] = await Workout.update(req.body, {
      where: { id: +req.params.id },
      returning: true
    })
    console.log('ROUTE UPDATED WORKOUT: ', updatedWorkout[0].dataValues)
    res.json(updatedWorkout[0].dataValues)
  } catch (err) {
    next(err)
  }
})

// DELETE an Workout by id
router.delete('/:id', async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(+req.params.id)
    if (!workout) return res.sendStatus(404)
    await workout.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

module.exports = router
