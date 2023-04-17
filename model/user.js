const Mongoose = require('mongoose');
const UserSchema = Mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {trype: String, required: true, minlength: 6},
    role: {trype: String, required: true, default: 'user'},
})

const User = Mongoose.model('User', UserSchema);

module.exports = User;