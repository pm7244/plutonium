const express = require('express');
const router = express.Router();

// const UserModel= require("../models/userModel.js")
// const userController= require("../controllers/userController")

const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController")
//const authorController= require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookController.createBook)

router.get("/getBook", bookController.getBooks)

router.post("/createAuthor", bookController.createAuthor)

router.get("/getauthor",bookController.getauthor)

router.get("/getBookData", bookController.getBookData)

router.get("/findauthor ", bookController. findauthor )

router.get("/findBooks", bookController. findBooks)

module.exports = router;