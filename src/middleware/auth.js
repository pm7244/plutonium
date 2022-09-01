const jwt = require('jsonwebtoken')
const userModel = require("../models/userModel")
const mongoose = require('mongoose')



const authenticate = async function(req, res) {

  let userName = req.body.emailId;
  let user = await userModel.findOne({emailId : userName})
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Plutonium",
      organisation: "Function-up",
    },
    "functionup-Plutonium-key"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};
    
// authorise ******************************************************************************************************88
const authorise = function(req, res, next ) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "functionup-Plutonium-key",(err , decode) => {
    if(err){
      return res.send("you have entered incorrect token or. incorrect length of token")
    } (decode == true)
        next()
    
  });
}

const authorise2 = function(req, res, next) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "functionup-Plutonium-key")
let userLoggedIn = decodedToken.userId
let userToBeModified = req.params.userId
  
  let isValid = mongoose.Types.ObjectId.isValid(userToBeModified)
  
 if (isValid === false){
    return  res.send("length of the id is less then 24 digit")
   }
  else if (!decodedToken){
    return res.send({ status: false, msg: "token is invalid" });
  } 
  else  if(userToBeModified != userLoggedIn) {
  return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
  }else {
    next()
}  
}

module.exports.authenticate =authenticate
module.exports.authorise =authorise
module.exports.authorise2 = authorise2












//==========================================//=====================================================//==================================

// const  Jwt=require('jsonwebtoken')
// const userModel=require('../models/userModel')
// const mongoose=require('mongoose')

// const auththencate=async function(req,res){
//     let userName=req.body.emailId;
//     let user=await userModel.findOne({emailId : userName})
//     let token=jwt.sign(
//      {
//         userId:user._Id.toString(),
//         batch:"Plutonium",
//         organisation:"Function-up",
//      },
//      "functionup-Plutonium-key"   
//     );
//     res.setHeader("x-auth-token",token);
//     res.send({status:true,data:token});
// };



// //========================authorise====================================//

// const authorise=function(req,res,next){
//     let token=req.headers["x-auth-token"];
//     if(!token) token = req.herders["x-Auth-token"];
//     if(!token) return res.send({status:"false", msg:"token must be present"});

//     let decodedToken = Jwt.verify (token,"Functionup-Plutonium-key",(err , decode)=>{
//         if(err){
//             //const decode=jwt.verify(token,"plutonium-very-very-secret-key")
//             return res.send("you have incorrect token  or incorrect length")
//         }{decode==true  }
//     next()
// });
// }

// //===========================authorise2==================================//

// const authorise2=  function(req,res,next){
// let token=req.headers["x-auth-token"]
// if(!token) token = req.header["x-Auth-token"]
// if(!token) return res.send({stats:'false',msg:'token must be present'})

// let decodeToken = jwt.verify(token,'Function-Plutonium-key')
// let userLoggedIn=decodeToken.userId
// let UserToBeModefied=req.peram.userId
// let isvalid = mongoose.Schema.Types.ObjectId.isvalid(userToBeModefied)

// if(isvalid === false){
//     return res.send("length of theif is less then 24 digit")
// }
// else if(!decodeToken){
//     return res.send({status:"false",msg:"token is invalid"})
// }
// else if(userTokenBemodified !=userLoggedIn){
//     return res.send ({ status:"false",msg:"user login is not allowed to modify the requested users" })
// }else{
//     next()
// }
// }

// module.exports.authorise= authorise
// module.exports.auththencate=auththencate
// module.exports.authorise2=authorise2





// const jwt = require("jsonwebtoken");
// const middle = function (req, res, next) {
//     let token=req.headers["x-auth-token"]
//     if(!token) token=req.headers['x-Auth-token']
//     if(!token) return res.send({status:false,msg:"token must be in the header"})
//     const decode=jwt.verify(token,"plutonium-very-very-secret-key")
//     if(!decode) return res.send({status:false,msg:"token is invalid try with valid token"})
//     next()
//  }
//  module.exports=middle










