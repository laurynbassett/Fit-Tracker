const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const db = require('./database')
const path = require('path')
const app = express()

// Use morgan for logging
app.use(morgan('dev'))

// Make sure we can parse JSON request bodies
app.use(bodyParser.json())

// auth and api routes
app.use('/api', require('./api'))
app.use('/auth', require('./auth'))

// Serve the index.html file in ./public as a homepage
app.use(express.static(path.join(__dirname, 'public')))

// If the environment has a PORT defined, use that (otherwise, default to 3030)
const PORT = process.env.PORT || 3030

process.on('uncaughtException', function(exception) {
  console.log('EXCEPTION', exception) // to see your exception details in the console
  // if you are on production, maybe you can send the exception details to your
  // email as well ?
})

// Remember that we aren't able to use await outside of an async function.
async function startServer() {
  try {
    await db.sync()
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}: http://localhost:${PORT}/`)
    })
  } catch (err) {
    console.error(err)
  }
}
startServer()
