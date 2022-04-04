const db = require('../db')
const { simUser } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [
        // {
        //     user: 'Elon Musk',
        //     location: 'South Africa'
        // },
        {
            user: 'Ye',
            location: 'Atlanta'
        },
        {
            user: 'Joe Rogan',
            location: 'New Jersey'
        },
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

