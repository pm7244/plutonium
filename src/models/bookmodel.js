
//const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: {type:String,require:true},
//     lastName: {type:String,require:true},
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number
// }, { timestamps: true });




//
    
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const bookSchema = new mongoose.Schema({
    name:{
            type : String,
        },

    author: {
       type: ObjectId,
       ref:"newauthor"
    },

    price : Number,
    ratings : Number,
}, { timestamps: true });
module.exports = mongoose.model('book', bookSchema)