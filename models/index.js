const mongoose = require('mongoose')
const PostSchema = require('./post')
const simUserSchema = require('./simUser')

const Post = mongoose.model('Post', PostSchema)
const simUser = mongoose.model('simUser', simUserSchema)

module.exports = {
  Post,
  simUser
}