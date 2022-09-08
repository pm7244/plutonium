
const middleware=require("../middleware/middleware")
const express = require('express');
const router = express.Router();
const authorController = require("../Controllers/authorController");
const blogController=require("../Controllers/blogController")

router.post("/authors" , authorController.createAuthor)

router.post("/blogs" ,middleware.authenticator, blogController.createBlog)

router.get("/getblogs",middleware.authenticator,blogController.getblogs)

router.put("/blogs/:blogId",middleware.authenticator,middleware.authorizer,blogController.updateblog)

router.delete("/blogs/:blogId",middleware.authenticator,middleware.authorizer,blogController.deleteblog)

router.delete("/blogs",middleware.authenticator,middleware.authorizer,blogController.deleteByQueryParams)

router.post("/loginUser" , authorController.loginAuthor)

module.exports = router;