const BookModel= require("../models/bookModel")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createBook = async function(req,res){
    let data =req.body
    let saveData = await BookModel.create(data)
    res.send({msg:saveData})
}
const getBooks = async function (req,res){
    let booksData= await  BookModel.find()
    res.send({msg:booksData})
}

const createAuthor = async function (req,res){
    let data= req.body
    let saveData = await authorModel.create(data)
    res.send({msg:saveData})
}

const getauthor= async function(req,res){
    let authordata = await authorModel.find()
    res.send({msg:authordata})
}

const getBookData = async function (req,res){
    let authors = await authorModel.find({author_name : "Chetan Bhaget"})
    let bookid = await BookModel.find({author_Id : {$eq:authors[0].author_Id}})
    res.send({msg:bookid})
}


const findauthor = async function (req, res) {
    let myBook = await BookModel.findOneAndUpdate(
        {name:"Two state"},  //condition
        {price :100},  //update in data
        {new: true}  //upsert:true
    );
    let newprice = myBook.price;
    let authorupdate = await authorModel.find({author_Id: {$eq : myBook.author_id}}).select({author_name:1 ,_id:0});
    res.send({msg: authorupdate, newprice})
}



const findBooks = async function(req , res){
    let allBooks = await BookModel.find ({price: {$gte:50 , $lte:100 }})
    let store = allBooks.map(x =>x.author_id);
    let newBook = await authorModel.find({author_id : store}).select({author_name:1 , _id:0})
    res.send({msg:newBook})
}

module.exports.createBook = createBook
module.exports.getBooks = getBooks
module.exports.createAuthor = createAuthor
module.exports.getauthor = getauthor
module.exports.getBookData = getBookData
module.exports .findauthor = findauthor 
module.exports.findBooks = findBooks
