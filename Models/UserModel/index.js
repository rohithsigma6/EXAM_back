const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    testsAttempted: { type: Array, default: [] },
    role:{type:String,default:"student"}   
}, {
    timestamps: true
});

module.exports.User =new mongoose.model('User', userSchema);

