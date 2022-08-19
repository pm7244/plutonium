const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type:String,required:true},
    authorName: {type:String}, 
    tags: [String,String],
    sales:{type:Number,required:true},

    year:{type:Number},
    price:{
        indianPrice: {type:String},
        europePrice:  {type:String},
    },
        totalPages:{type:Number},
    stockAvilable:{type:Boolean}
}, { timestamps:true });

    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10},
//     summary: mongoose.Schema.Types
//     //{
//         // "ch1": "awrsome introto 35"
//         // "ch2": "awrsome introto 35" 
//         // "ch3": "awrsome introto 35"

//     //}
// }, { timestamps: true });


module.exports = mongoose.model('Book-collection', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
