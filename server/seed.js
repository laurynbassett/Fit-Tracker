const { Activity, Workout, Exercise, User, db } = require('./database')

const yesterday = new Date(Date.now() - 24 * 60 * (60 * 1000))
const nextWeek = new Date(Date.now() + 7 * 24 * 60 * (60 * 1000))

const seedUsers = [
  {
    email: 'admin@a.com',
    password: 'admin',
    firstName: 'Admin',
    lastName: 'Admin',
    fullName: 'Admin Admin'
  }
]

const seedWorkouts = [
  {
    name: 'Work the Core',
    date: yesterday,
    exercises: [
      {
        name: 'Bicycling',
        completed: true,
        description: 'Bike 10km along the lakefront',
        duration: 30
      },
      {
        name: 'Weightlifting',
        completed: false,
        description: 'Free weights',
        duration: 200
      },
      {
        name: 'Swimming',
        completed: true,
        description: 'Swim to the edge of the earth',
        duration: 117
      }
    ]
  },
  {
    name: 'Leg Day',
    date: nextWeek,
    exercises: [
      {
        name: 'Swimming',
        completed: true,
        description: 'Swim across the canal 37 times',
        duration: 4
      },
      {
        name: 'Dancing',
        completed: false,
        description: 'Swing for me',
        duration: 19
      }
    ]
  }
]

async function seed() {
  try {
    console.log('Seeding the database...')
    await db.sync({ force: true })
    const user1 = await User.create(seedUsers[0])
    await Workout.create(
      { ...seedWorkouts[0], userId: user1.id },
      {
        include: [ Exercise ]
      }
    )

    await Workout.create(
      { ...seedWorkouts[1], userId: user1.id },
      {
        include: [ Exercise ]
      }
    )
  } catch (err) {
    console.error('Error seeding database: ', err)
  }
}

// separate `seed` and `runSeed` fns so we can isolate error handling and exit trapping
const runSeed = async () => {
  try {
    await seed()
  } catch (err) {
    console.error('Error running seed fn: ', err)
    process.exitCode = 1
  } finally {
    console.log('Closing db connection')
    await db.close()
    console.log('Db connection closed')
  }
}

// Execute `seed` fn if module ran directly (`node seed`)
if (module === require.main) {
  runSeed()
}
