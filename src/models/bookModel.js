// const mongoose=require("mongoose")
// const ObjectId = mongoose.Schema.Types.ObjectId

// const booksSchema=new mongoose.Schema({
//     name: String,
//     //_id:String,
//     author: {
//         type:ObjectId,
//         ref: "newAuthor"
//     },
//     price: Number,
//     ratings: Number,
//     publisher: {
//         required: true,
//         type: ObjectId,
//         ref: "newPublisher"
//     },
//     isHardCover: {
//         type : Boolean,
//         default:false

//      }
    
// }, {timestamps: true});

// module.exports = mongoose.model('book2', booksSchema)
//export default mongoose.models['newBook'] || mongoose.model('newBook', bookSchema);