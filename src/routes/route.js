const express = require('express');
const router = express.Router();

// const UserModel= require("../models/userModel.js")
// const userController= require("../controllers/userController")

//const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController")
//const publisherController = require("../controllers/publisherController")
//const authorController= require("../controllers/authorController")


const commonMiddleware=require("../middleware/commonMiddleware")
const orderController=require("../controllers/orderController")
const productController=require("../controllers/productController")
const userController=require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//createUser
 router.post("/createUser",commonMiddleware.validation,userController.createUser)

 //createProduct
 router.post("/createProduct",productController.createProduct)

 //createOrder
 router.post("/createOrder",commonMiddleware.validation,orderController.createOrder)
 module.exports = router;

// router.get("/getAuthorsData", authorController.getAuthorsData)

//router.post("/createBook", bookController.createBook)

//module.exports = router;











// router.get("/getBooksData", bookController.getBookData)
// router.get("/getpublisherWithAuthorDetails", bookController.getpublisherWithAuthorDetails)




// router.post("/create", publisherController.create)
// router.get("/getUsers", publisherController.getUsers)
 
