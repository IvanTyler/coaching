const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    date:{
        type: Number,
        required: true,
    },
    time:{
        type: Number,
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
    category:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
    }
})

module.exports = mongoose.model('Session', sessionSchema);
