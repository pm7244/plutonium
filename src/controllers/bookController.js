//const { count } = require("console")
//const BookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }


// const getBooksData= async function (req, res) {}

    // let allBooks= await BookModel.find( ).count() // COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    
    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition
    //     { $set: { isPublished: true} } // the change that you want to make
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 
    
    // ASYNC AWAIT
    
    // let a= 2+4
    // a= a + 10
    // console.log(a)
    // let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


    // WHEN AWAIT IS USED: - database + axios
    //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
//     console.log(allBooks)
//     let b = 14
//     b= b+ 10
//     console.log(b)
//     res.send({msg: allBooks})
// }


// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData




// to create a new entry..use this api  to create 11+ entries in your collection//
const createBook = async function(req,res){
const data =req.body
let saveData = await BookModel.create(data)
res.send({msg:saveData})
}

// givea all the books-their bookName and authorName only//
const booklist=async function(req,res){
let allBooks = await BookModel.find().select({bookName:1,authorName:1,_id: 0}).count()
res.send({msg:allBooks})
}

//takes year as input in post request and gives list of all books published that year//
const getBooksInYear= async function(req,res) {
    let newyear= req.query.year
    let allBooks=await BookModel.find({year:newyear} )  
    res.send({msg: allBooks})
}


//(This is a good one ,make sincere effort to solve this) take any input and use it as a condition to featch book that satisfy that condition //
const getParticuarBooks=async function(req,res){
    let obj=req.body
    let key= Object.keys(obj)[0]
    let value = obj[key]
    let spcificBooks = await BookModel.find({ [key] : value})
    res.send({msg:spcificBooks})
}

//request to return all books who have an indian price tag of "100IRN"or "200IRN",500IRN"
const getXINRBooks = async function(req,res){
    let allBooks = await BookModel.find({"prices.indianPrice":{$in : ["100INR","200INR","500INR"]} })
    res.send({msg:allBooks , status:true})
}


//return book that are avilable in stock or have ore than 500pages//
const getRandomBooks = async function(req,res){
    let AllBook=await BookModel.find({$or: [{stockAvilable:true},{totalPages:{$get:600}}]})
}

module.exports.createBook=createBook
module.exports.booklist=booklist
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticuarBooks=getParticuarBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks




//======================================//========

// const { count } = require("console")
// const bookModel = require("../models/bookModel")
// const BookModel= require("../models/bookModel")

// const createBookData = async function (req,res){

//     let data = req.body
//     let saveBookData = await bookModel.create(data)
//     res.send({msg:saveBookData})
// }

// const getBooksData = function (req,res){
//     let.send({msg:allBooksData}) 
// }

// module.exports.createBookData=createBookData
// module.exports.getBookData=getBooksData













//-------------------///----------------



