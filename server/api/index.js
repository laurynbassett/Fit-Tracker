const router = require('express').Router()
module.exports = router

router.use('/workouts', require('./workouts'))
router.use('/exercises', require('./exercises'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
