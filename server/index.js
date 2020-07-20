const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const { db, User } = require('./database')
const sessionStore = new SequelizeStore({ db })
const app = express()
const PORT = process.env.PORT || 3030

// secret API keys read by the Node process on process.env
if (process.env.NODE_ENV !== 'production') require('./auth/secrets')

// passport registration
passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

const createApp = () => {
  // Use morgan for logging
  app.use(morgan('dev'))

  // Make sure we can parse JSON request bodies
  app.use(bodyParser.json())

  // session middleware w/ passport
  app.use(
    session({
      store: sessionStore,
      secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
      resave: false,
      saveUninitialized: false
    })
  )

  app.use(passport.initialize())
  app.use(passport.session())

  // auth and api routes
  app.use('/api', require('./api'))
  app.use('/auth', require('./auth'))

  // Serve the index.html file in ./public as a homepage
  app.use(express.static(path.join(__dirname, 'public')))

  // handle 404s
  app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  // all GET reqs not on an API route, send index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/server/public/index.html'))
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error')
  })
}

const startListening = () => {
  const server = app.listen(PORT, () => {
    console.log(`
Listening on port ${PORT}
http://localhost:${PORT}/`)
  })

  // const io = socketio(server)
  // require('./socket')(io)
}

const syncDb = () => db.sync()

async function bootApp() {
  await sessionStore.sync()
  await syncDb()
  await createApp()
  await startListening()
}

if (require.main === module) bootApp()
else createApp()
