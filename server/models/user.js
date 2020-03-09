const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: { type: String, max: [30, "Name too long"] },
    email: { type: String },
    password: { type: String, default: null }
})

module.exports = mongoose.model('users', userSchema)
