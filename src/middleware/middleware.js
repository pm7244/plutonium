const jwt = require("jsonwebtoken");
const blogsModel = require('../model/blogsModel');

//===========================================================================================//
const authenticator = async function (req, res, next) {
    try {
       let token = req.headers["x-api-key"];
        if (!token) {
            return res.status(400).send({
                status: false,
                message: "token is not present",
            });
        }
        let decodedToken = jwt.verify(token, "bloggingproject1");
        if (decodedToken) {
            req.authorId = decodedToken.authorId
            next();
        } else {
            return res.status(400).send({ status: false, message: "Token is not valid" });
        }
    } catch (err) {
        return res.status(500).send({ status: false, mess: err.message })
    }
};

//-----------------------------------authorization----------------------------------------------------------------//

const authorizer =  async function (req, res, next) {
    try {
        let blogId = req.params.blogId;
        let blog= await blogsModel.findById(blogId)
        if(!blog){
            return res.send({status:false, msg:"blog does not exist"})
        }
         if (!(req.authorId == blog.authorId)) {
            return res.status(401).send({ status: false, message: "you are not authorize" });
        } else {
            next();
        }
    } catch (err) {
        return res.status(500).send({ status: false, mess: err.message })
    }
};
module.exports.authorizer = authorizer;

module.exports.authenticator = authenticator;
