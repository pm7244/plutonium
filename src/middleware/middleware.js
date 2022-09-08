const jwt = require("jsonwebtoken");
const blogsModel = require("../model/blogsModel");
const ObjectId = require("mongoose").Types.ObjectId;

//=================================//Authentication//==========================================================//
const authenticator = function (req, res, next) {
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
            req.authorId = decodedToken.authorId;
            next();
        } else {
            return res
                .status(400)
                .send({ status: false, message: "Token is not valid" });
        }
    } catch (err) {
        return res.status(500).send({ status: false, mess: err.message });
    }
};

//-----------------------------------//authorization//----------------------------------------------------------------//

const authorizer = async function (req, res, next) {
    try {
        let blogId = req.params.blogId;

        let validObjectId = ObjectId.isValid(blogId);
        if (!validObjectId) {
            return res.status(400).send({ msg: "Please provide a valid blogId" });
        }
        let blog = await blogsModel.findOne({ _id: blogId, isDeleted: false });
        if (!blog) {
            return res
                .status(404)
                .send({ status: false, msg: "blog does not exist" });
        }

        if (!(req.authorId == blog.authorId)) {
            return res
                .status(401)
                .send({ status: false, message: "you are not authorize" });
        } else {
            next();
        }
    } catch (err) {
        return res.status(500).send({ status: false, mess: err });
    }
};

const authorizer2 = async function (req, res, next) {
    try {
        let blog = await blogsModel.findOne(req.query);
        if (!blog) {
            return res
                .status(404)
                .send({ status: false, msg: "blog does not exist" });
        }
        if (!(req.authorId == blog.authorId)) {
            return res
                .status(401)
                .send({ status: false, message: "you are not authorize" });
        } else {
            next();
        }
    } catch (err) {
        return res.status(500).send({ status: false, mess: err });
    }
};

module.exports.authorizer = authorizer;
module.exports.authenticator = authenticator;
module.exports.authorizer2 = authorizer2;
