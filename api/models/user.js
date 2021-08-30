const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    userId: {
        type: Number
    },
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String
    },
    organization: {
        type: String
    }
})

module.exports = model('User', userSchema)