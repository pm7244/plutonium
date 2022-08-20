const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId
const authorSchema  = new mongoose.Schema({
author_Id :{
    type: Number,
    require:true
},

author_name: String,

age: Number,

address: String

}, { timestamps: true });
module.exports = mongoose.model("author",authorSchema )
