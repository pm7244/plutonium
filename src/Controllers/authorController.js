
const jwt=require('jsonwebtoken');
const authorModel = require('../model/authorModel');
const AuthorModel = require('../model/authorModel');
// const authoController = require('../model/authorModel');

const createAuthor = async function(req, res){

    let data = req.body ;
    let authordata = await AuthorModel.create(data)

    res.send({msg : authordata , status : true})


}

// Phase II
// Add authentication and authroisation feature
// POST /login
// Allow an author to login with their email and password. On a successful login attempt return a JWT token contatining the authorId in response body like this
// If the credentials are incorrect return a suitable error message with a valid HTTP status code

const loginAuthor=async function(req,res){
    try{

    let { email,password}= req.body
    let author= await authorModel.findOne({ email ,password});
   if (author) {
        let payload = { authorId: author._id,   email:   email };
        const generatedToken = jwt.sign(payload, "bloggingproject1");
        return res.status(200).send({
          status: true,
          token: generatedToken,
        });
      } else {
        return res.status(400).send({ status: false, message: "Invalid credentials" });
      }
    } 
    catch(error){
        res.status(500).send({status : false , msg : error.message})

    }
    }






module.exports.loginAuthor = loginAuthor;

module.exports.createAuthor = createAuthor ;