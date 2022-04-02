const { model } = require('mongoose')
const PostSchema = require('./Post')
const simUserSchema = require('./simUser')

const Post = model('Post', PostSchema)
const simUser = model('simUser', simUserSchema)

module.exports = {
  Post,
  simUser
}