const  mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

name : String,
balance:Number,
address : {
    type:String,
    defult:100
},
age : Number,
gender : {
    type:String,
    enum:["male","female","LGBTQ"]
},
isFreeAppUser : {
    type:Boolean,
    defult:false
},
        
}, {timestamps: true});

module.exports = mongoose.model('newUser', userSchema) //users
