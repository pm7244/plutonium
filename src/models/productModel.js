const  mongoose = require('mongoose');
const productSchema = new mongoose.Schema({

name : String,
category : {
    type : String,
    //ref : "newCategory"
},
price:Number,
},
{timestamps: true});
module.exports = mongoose.model('newProduct', productSchema)

