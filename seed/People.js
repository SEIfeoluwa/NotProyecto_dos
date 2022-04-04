const db = require('../db')
const { simUser } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [{
        user: "Dwayne Johnson",
        location: "West Coast"
        },
        {
           user: "Aubrey Graham",
           location: "Canada"
        },
        {
            user: 'Elon Musk',
            location: 'South Africa'
        }
    ]
    await simUser.insertMany(users)
    console.log('Post Created')
    return users
}

const run = async () => {
    await main()
    db.close()
}

run()