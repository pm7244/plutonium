//const middleware = require('../middleware/auth')
const express = require('express');
const router = express.Router();

// const UserModel= require("../models/userModel.js")
// const userController= require("../controllers/userController")

//const bookModel= require("../models/bookModel.js")
//const bookController= require("../controllers/bookController")
//const publisherController = require("../controllers/publisherController")
//const authorController= require("../controllers/authorController")


//const commonMiddleware=require("../middleware/commonMiddleware")
//const orderController=require("../controllers/orderController")
//const productController=require("../controllers/productController")
const userController=require("../controllers/userController");
const middleware = require('../middleware/auth');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// //createUser
//  //router.post("/createUser",commonMiddleware.validation,userController.createUser)
//  router.post("/createUser",userController.createUser)

// router.post("/loginUser",userController.loginUser.AuthController.CreatingToken)


// assingment athontication 
// router.post("/user/signUp",userController.singUP)
// router.post("/user/logIn",userController.logIn)
// router.get("/user/:userId",middle,userController.getUserData)
// router.put("/user/update/:userId",middle,userController.updateData)
// router.delete("/user/delete/:userId",middle,userController.isdelete)
// module.exports = router;

router.post("/createuser",userController.createuser)
router.post("/logInUsers",userController.logInUsers)

//userId is sent by front end
router.get('/getUserData/:userId',middleware.authorise,middleware.authorise2,userController.getUserData)
router.post('/postusers/:userId/posts',middleware.authorise,middleware.authorise2,userController.postmessage)

router.get('/updateData/:userId',middleware.authorise,middleware.authorise2,userController.updateData)
router.delate("isdelete/:userId",middleware.authorise,middleware.authorise2,userController.isdelete)
module.exports=router








 //createProduct
 //router.post("/createProduct",productController.createProduct)

 //createOrder
 //router.post("/createOrder",commonMiddleware.validation,orderController.createOrder)
 //modulexpor.ets = router;








 
