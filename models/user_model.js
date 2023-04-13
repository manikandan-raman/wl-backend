const mongoose = require('mongoose');

const validateEmail = function(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};

const userSchema = new mongoose.Schema({
    name: {type: String, required: [true, "name is required"]},
    email: {type: String, unique: true, validate: [validateEmail, "Please enter a valid email"], required: [true, "email is required"]},
    phone: {type: String, required: false, minlength: [10, "Enter valid phone number"]},
    password: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);