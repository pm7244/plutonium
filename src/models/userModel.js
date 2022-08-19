 const mongoose = require('mongoose');

 const userSchema = new mongoose.Schema( {
//     bookName: {type:String,require:true},
//     authorName: {type:String,require:true},
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     category:String,
//     year:Number,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array



//const bookSchema = new mongoose.Schema( {
    bookName: "String",
    authorName:"String",
    category: {
        type:"String",
        enum:["Fantasy","Sci-fi","Mystery","Thriller","Romance","Dystopian","Contemporary"]
    },
    year:Number
}, {timestamps: true});

module.exports = mongoose.model("my-book", userSchema) //users
