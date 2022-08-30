const  mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	
        firstName : String,
        lastName : String,
        mobile : String,
        emailId : String,
        password : String,
        age : String,
    
gender : {
    type:String,
    enum:["male","female","LGBTQ"]
},
        
}, {timestamps: true});

module.exports = mongoose.model('newUser', userSchema) //users
