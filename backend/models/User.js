const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { 
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true 
    },
    firstName: { 
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "vendor", "client"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);
