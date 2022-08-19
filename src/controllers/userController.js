const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBookData = async function (req,res){

    let data = req.body
    let saveBookData = await bookModel.create(data)
    res.send({msg:saveBookData})
}

const getBooksData = function (req,res){
    let allBooksData = await bookModel.find()
    let.send({msg:allBooksData}) 
}

module.exports.createBookData = createBookData
module.exports.getBooksData = getBooksData