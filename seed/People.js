const db = require('../db')
const { simUser } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))