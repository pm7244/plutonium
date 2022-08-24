// const authorModel = require("../models/authorModel")
// const bookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails


let mongoose = require('mongoose');
const bookModel = require("../models/newbookmodel")
const publisherModel = require("../models/publisherModel");
const authorModel = require("../models/authorModel");


const createBook = async function(req, res) {
    let book = req.body
    let author1 = book.author
    let publisher1 = book.publisher
    let isValid = mongoose.Types.ObjectId.isValid(author1)
    let isValidp = mongoose.Types.ObjectId.isValid(publisher1)
    if(isValid === false) {
        return res.send("Invalid length of author")
    } else if(isValidp === false) {
        return res.send("Invalid length of publisher id")
    }

    let idfromauthor = await authorModel.findById(author1)
    let idfromPublisher = await publisherModel.findById(publisher1)

    if (!idfromauthor) {
        return res.send("this author doesn't exist")
    } else if (!idfromPublisher) {
        return res.send("this publisher doesn't exist")
    } else if (!idfromauthor && !idfromPublisher) {
        return res.send("author and publisher both id's are invalid, please try with valid id")
    } else {
        let bookCreated = await bookModel.create(book)
        res.send({data: bookCreated})
        }
}


const getBookData = async function(req,res){
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({msg:books})
}



const getpublisherWithAuthorDetails = async function(req,res){
    let data = await publisherModel.find({name:["Penguin","HarperCollins"]}).select({_id : 1})
    let bookid = await bookModel.updateMany({publisher : data}, {$set : {isHardCover : true, new : true}})

    let authorIds = await authorModel.find({ratings : { $gt : 3.5}}).select({_id : 1})
    let rating1 = await bookModel.updateMany({author : authorIds }, {$inc :{price : 10}})

    res.send({data: bookid, rating1})
}

module.exports.createBook = createBook 
module.exports.getBookData=getBookData
module.exports. getpublisherWithAuthorDetails= getpublisherWithAuthorDetails