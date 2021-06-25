const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    photo:{
        type: String,
    },
    choosedSession:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Session'
    },
    rating:{
        type: Number,
        default: 0,
    },
})

module.exports = mongoose.model('User', usersSchema)
