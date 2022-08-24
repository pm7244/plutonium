const express = require('express');
const router = express.Router();

// const UserModel= require("../models/userModel.js")
// const userController= require("../controllers/userController")

const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")
const authorController= require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor)
router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook)
router.get("/getBooksData", bookController.getBookData)
router.get("/getpublisherWithAuthorDetails", bookController.getpublisherWithAuthorDetails)

router.post("/create", publisherController.create)
router.get("/getUsers", publisherController.getUsers)

module.exports = router;