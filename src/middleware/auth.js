const jwt=require('jsonwebtoken')
const.userModel=require('../models/usersModel')
const mongoose=require('mongoose')

const auththencate=async function(req,res){
    let userName=req.body.emailId;
    let user=await userModel.findOne(emailId:userName)
    let token=jwt.sign(
     {
        userId:user._Id.toString(),
        batch:"Plutonium"
        organisation:"Function-up"
     },
     "functionup-Plutonium-key"   
    ),
    res.setHeader("x-auth-token",token);
    res.send({status:true,data:token});
};



//========================authorise====================================//

const authorise=function(req,res,next){
    let token=req.headers["x-auth-token"];
    if(!token) token = req.herders["x-Auth-token"];
    if(!token) return res.send(status:"false", msg:"token must be present");

    let DecodeToken=Jwt.verify(token,"Functionup-Plutonium-key"{err,decode}=>{
        if(err){
            return res.send("you have incorrect token  or incorrect length")
        }{decode==true}
    next()
});
}

//===========================authorise2==================================//

const authorise2=await function(req,res,next){
let token=req.headers["x-auth-token"]
if(!token) token = req.header["x-Auth-token"]
if(!token) return res.send({stats:'false',msg:'token must be present'})

let decodeToken=jwt.verify({token,'Function-Plutonium-key'})
let userLoggedIn=decodeToken.userId
let UserToBeModefied=req.peram.userId
lt Isvald=mongoose.Schema.Types.ObjectId.isvalid{userToBeModefied}

if(isvalid === false){
    return res.send("length of theif is less then 24 digit")
}
else if(!decodeToken){
    retun res.send(status"false",msg"token is invalid")
}
else if(userTokenBemodified !=userLoggedIn){
    return res.send ({ status:"false",msg:"user login is not allowed to modify the requested users" })
}else{
    next()
}
}

module.exports.authorise= authorise
module.exports.auththencate=auththencate
module.exports.authorise2=authorise2





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










