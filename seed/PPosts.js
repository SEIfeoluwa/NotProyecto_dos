const db = require('../db')
const { simUser, Post } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const preMadeUser = await simUser.find({})

    const preMadePost = [{
       text: "Please ignore prior tweets, as that was someone pretending to be me :) This is actually me.",
       simUser_id: preMadeUser[0]._id,
       user: preMadeUser[0].user
    },
    {
        text: "Splashdown successful!! Sending fast boat to Dragon lat/long provided by P3 tracking planes.",
        simUser_id: preMadeUser[0]._id,
        user: preMadeUser[0].user 
    },
    {
        text: "After 50k hats, we will start selling The Boring Company flamethrower.",
        simUser_id: preMadeUser[0]._id,
        user: preMadeUser[0].user
    },
    {
        text: "Am considering taking tesla private at $420. Funding Secured.",
        simUser_id: preMadeUser[0]._id,
        user: preMadeUser[0].user
    },
    {
        text: "I'm super chaaaaaaaaaarged. Bout to take this whole thing to mars",
        simUser_id: preMadeUser[1]._id,
        user: preMadeUser[1].user
    },
]
    await Post.insertMany(preMadePost)
    console.log('Created Posts')
}
const run = async () => {
    await main()
    db.close()
}

run()