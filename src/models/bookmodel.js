
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: {type:String,require:true},
    lastName: {type:String,require:true},
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)