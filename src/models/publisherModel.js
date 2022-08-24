const  mongoose = require('mongoose');

const newpublisher = new mongoose.Schema({
    
    name:String,

    headQuarter:String,

}, {timestamps:true});

module.exports=mongoose.model('newPublisher',newpublisher)