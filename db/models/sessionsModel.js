const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    date:{
        type: String,
        required: true,
    },
    timeFirst:{
        type: String,
        required: true,
    },
    timeLast:{
        type: String,
        required: true,
    },
    payment:{
        type: Boolean,
    },
    donation:{
        type: Boolean,
    },
    feedback:{
      type: Boolean,
    },
})

module.exports = mongoose.model('Session', sessionSchema);
