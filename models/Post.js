const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const Post = new Schema(
  {
    text: {type: String, required: true},
    simUser_id: { type: Schema.Types.ObjectId, ref: 'simUser_id' }
  },
  { timestamps: true }
)

module.exports = Post