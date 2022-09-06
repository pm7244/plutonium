

const express = require('express');
const router = express.Router();
const authorController = require("../Controllers/authorController");
const blogController=require("../Controllers/blogController")

router.post("/authors" , authorController.createAuthor)

router.post("/blogs" , blogController.createBlog)

router.get("/getblogs",blogController.getblogs)

router.put("/blogs/:blogId",blogController.updateblog)

router.delete("/blogs/:blogId",blogController.deleteblog)



module.exports = router;