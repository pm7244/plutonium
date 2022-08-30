const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// const userSchema=require("../models/userdata");
// const jwt = require("jsonwebtoken");


// singup 
const createuser=async function(req,res){
    const data=req.body
    const savedData=await userModel.create(data);
    res.send({
        msg:"saved data", data:savedData
    })
}
// login
const logInUsers=async function(req,res){
    const data=req.body
    const getData=await userModel.findOne({emailId:data.emailId, password:data.password})
    // when data not get
    if(!getData){
        return res.send({msg:"password or userName is wrong try again..."})
    }
    // after successful login create token
    let token=jwt.sign({
        userId:getData._id.toString(),
        batch:"plutonium",
        orgnigation:"Functionup"
    },
    "plutonium-very-very-secret-key")
    res.setHeader("x-Auth-token",token)
    res.send({
        status:true,
        token:token
    })
}

// fething the userData
const getUserData=async function(req,res){
   // now check the validation of token
    const token=req.headers["x-auth-token"]
    const decode=jwt.verify(token,"plutonium-very-very-secret-key")
    if(!decode) return res.send({status:false,msg:"token is invalid try with valid token"})
    res.send({status:true,msg:"user is right person"})
}

//=============post message============================//
const postmessage= async function(req,res){
    let message=req.body.message
    if(!user){
        return res.send({satus:"false",msg:"no sech usr exists"})
    }else if(user.isdelate===true){
        res.send("this user is delete from our database you can't post a message")
    }else{
        let updatePosts=user.post

    //add the message to user 's posts
updatePosts.push(message)
let update = await userModel.findByIdAndUpdate({_id:user._id},{posts:updatePosts},{new:true})
return res.sen({status:true,data:updateuser})
}
}


// Write a **PUT api /users/:userId** to update user details. Pass the userId as path param in the url and update the attributes received in the request body. Check that request must contain **x-auth-token** header. If absent, return a suitable error.

const update=async function(req,res){
    const id=req.params.userId
    const data=req.body
    const update=await userModel.findByIdAndUpdate({_id:id},data,{new:true})
res.send({status:true,msg:update})
}

//Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain **x-auth-token** header. If absent, return a suitable error.

const isdelete=async function(req,res){
const id=req.param.userId
const data=req.body
const delData=await userSchema.findOneAndUpdate({_id:id,isdelete:true})
res.send({status:"update data",msg:delData})
}
module.exports.createuser=createuser
module.exports.logInUsers=logInUsers
module.exports.getUserData=getUserData
module.exports.postmessage=postmessage
module.exports.updateData=update
module.exports.isdelete=isdelete