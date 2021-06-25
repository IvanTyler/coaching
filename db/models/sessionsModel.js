const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
  },
  client: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
  }],
  date: {
    type: Date,
    required: true,
    min: Date()
  },
  timeFirst: {
    type: String,
    required: true,
  },
  timeLast: {
    type: String,
    required: true,
  },
  payment: {
    type: Boolean,
  },
  donation: {
    type: Boolean,
  },
  feedback: {
    type: Boolean,
  },
})

module.exports = mongoose.model('Session', sessionSchema);
