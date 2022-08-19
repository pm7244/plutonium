const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createBook", BookController.createBook  )
// router.get("/booklist", BookController.booklist)
// router.post("/getBookinYear", BookController.getBooksInYear  )
// router.get("/getParticularBooks", BookController.getParticuarBooks)
// router.get("/getXINRBooks",BookController.getXINRBooks)
//router.get("/getRandomBooks",BookController.getRandomBooks)

router.get("/createBookData",UserController.createBookData)

router.get("/getBooksData",UserController.getBooksData)

module.exports = router;