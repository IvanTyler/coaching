const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    name: {
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
        type: mongoose.Schema.Types.ObjectId, ref: 'Sessions'
    }
})

module.exports = mongoose.model('User', usersSchema)
