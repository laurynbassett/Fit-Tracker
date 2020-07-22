const express = require('express')
const { Activity } = require('../database/models')
const router = express.Router()

// GET all activities
router.get('/', async (req, res, next) => {
  try {
    const activities = await Activity.findAll()
    if (!activities) return res.sendStatus(404)
    res.json(activities)
  } catch (err) {
    next(err)
  }
})

// GET a single activity by id
router.get('/:id', async (req, res, next) => {
  try {
    const activity = await Activity.findByPk(+req.params.id)
    if (!activity) return res.sendStatus(404)
    res.json(activity)
  } catch (err) {
    next(err)
  }
})

// POST a new activity
router.post('/', async (req, res, next) => {
  try {
    console.log('REQ PARAMS', req.body)
    res.status(201)
    const activity = await Activity.create(req.body)
    res.json(activity)
  } catch (err) {
    next(err)
  }
})

// PUT a single activity by id
router.put('/:id', async (req, res, next) => {
  try {
    console.log('ACT', req.body)
    const activity = await Activity.findByPk(+req.params.id)
    if (!activity) return res.sendStatus(404)
    const [ numUpdated, updatedActivity ] = await Activity.update(req.body, {
      where: { id: +req.params.id },
      returning: true
    })
    console.log('ROUTE UPDATED ACTIVITY: ', updatedActivity[0].dataValues)
    res.json(updatedActivity[0].dataValues)
  } catch (err) {
    next(err)
  }
})

// DELETE an Workout by id
router.delete('/:id', async (req, res, next) => {
  try {
    const activity = await Activity.findByPk(+req.params.id)
    if (!activity) return res.sendStatus(404)
    await activity.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

module.exports = router
