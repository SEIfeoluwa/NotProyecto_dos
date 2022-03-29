const { Schema } = require('mongoose')

const simUser = new Schema(
  {
    user: { type: String, required: true },
    location: { type: String, required: true },
    url: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = simUser