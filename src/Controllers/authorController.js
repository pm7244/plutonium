const jwt = require("jsonwebtoken");
const AuthorModel = require("../model/authorModel");

const createAuthor = async function (req, res) {
  try {
    let { fname, lname, title, email, password } = req.body;
    if(!fname){
      return res.status(400).send({ msg: "fname is a required field" });
    }
    if(!lname){
      return res.status(400).send({ msg: "lname is a required field" });
    }
    if(!title){
      return res.status(400).send({ msg: "title is a required field" });
    }
    if(!email){
      return res.status(400).send({ msg: "email is a required field" });
    }
    if(!password){
      return res.status(400).send({ msg: "password is a required field" });
    }
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let checkEmail = regex.test(email);
    if (!checkEmail) {
      return res.status(400).send({ msg: "Please provide a valid email" });
    }
    let findEmail = await AuthorModel.findOne({email})
    if(findEmail){
      return res.status(400).send({ msg: "This email already exist" });
    }
    let authordata = await AuthorModel.create(req.body);
    res.status(201).send({ status: true, msg: authordata });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

// Phase II
// Add authentication and authroisation feature
// POST /login
// Allow an author to login with their email and password. On a successful login attempt return a JWT token contatining the authorId in response body like this
// If the credentials are incorrect return a suitable error message with a valid HTTP status code

const loginAuthor = async function (req, res) {
  try {

    let { email, password } = req.body;
    let author = await AuthorModel.findOne({ email, password });

    if (author) {
      let payload = { authorId: author._id, email: email };
      const generatedToken = jwt.sign(payload, "bloggingproject1");
      return res.status(200).send({status: true,token: generatedToken});
    } else {
      return res.status(400).send({ status: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

module.exports.loginAuthor = loginAuthor;
module.exports.createAuthor = createAuthor;