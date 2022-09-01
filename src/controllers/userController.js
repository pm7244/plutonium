const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//-------------------------createUser------------------------------
const createUser = async (req, res) => {
  try {
    const data = req.body;
    const savedData = await userModel.create(data);
    res.status(201).send({ status: true, msg: savedData });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};
//-------------------------loginUser------------------------------
const loginUser = async (req, res) => {
  try {
    const userName = req.body.emailId;
    const password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user) return res.status(400).send({ status: false, msg: "username or the password is not correct" });
    //---------------------token generation-------------------------
    const token = jwt.sign({ userId: user._id.toString(), place: "Murshidabad" }, "Shayan ");
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, token: token });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};
//--------------------------getUser-----------------------------
const getUserData = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userDetails = await userModel.findById(userId);
    res.status(200).send({ status: true, data: userDetails });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};
//-------------------------updateUser------------------------------
const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userData = req.body;
    const updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(200).send({ status: true, data: updatedUser });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};
//-------------------------deleteUser------------------------------
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
    res.status(200).send({ status: true, data: updatedUser });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};
//-------------------------postMassage------------------------------
const postMassage = async (req, res) => {
  try {
    const userId = req.params.userId;
    const postMsg = req.body.post;
    const user = await userModel.findById(userId);
    user.post = []
    let updatePost = user.post
    updatePost.push(postMsg)
    const postMassage = await userModel.findOneAndUpdate({ _id: userId }, { post: updatePost }, { new: true });
    res.status(200).send({ status: true, data: postMassage });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};

module.exports = { createUser, loginUser, getUserData, updateUser, deleteUser, postMassage }
















//=============================================================//====================================================




// const jwt = require("jsonwebtoken");
// const userModel = require("../models/userModel");

// //crate user ***************************************************************************************************
// const createUser = async function (req, res) {
//   let data = req.body;
//   let savedData = await userModel.create(data);
//   console.log(req.newAtribute);
//   res.send({ msg: savedData });

// }

// //login user ***************************************************************************************************
// const loginUser = async function (req, res , next) {
//   let userName = req.body.emailId;
//   let password = req.body.password;
//   let user = await userModel.findOne({ emailId: userName, password: password });

// }
// //   if (!user){ 
// //     return res.send({status: false,msg: "username or the password is not corerct",});
// //   }else if(user.isDeleted === true){
// //     res.send("this account is deleted you can't log in, please create new account ")
// //   }else{
// //     next ()
// //   }
// // }
 
 
// // getuserData ******************************************************************************************
// const getUserData = async function (req, res) {
//   try{
  
//   let userId = req.params.userId;
//   let userDetails = await userModel.findById(userId);
//   res.status(200).send({status:true,data:userDetails})
// }
// catch(err){
//   res.status(500).send({error : err.message})
// }
// }
//   // if (!userDetails){
//   // return res.send({ status: false, msg: "No such user exists" });
//   // } else if (userDetails.isDeleted==true){
//   //   res.send("this user is deleted from our databse you can't find")
//   // }else{
//   // res.send({ status: true, data: userDetails });
//   // }
// //};

// // post message ************************************************************************************
// const postMessage = async function (req, res) {
//     let message = req.body.message
//     let user = await userModel.findById(req.params.userId)
//     if(!user){
//        return res.send({status: false, msg: 'No such user exists'})
//     }else if(user.isDeleted==true){
//       res.send("this user is deleted from our database you can't post a message")
//     }else{
//        let updatedPosts = user.posts
//     //add the message to user's posts
//     updatedPosts.push(message)
//     let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
//     //return the updated user document
//     return res.send({status: true, data: updatedUser})
// }
// }

// // updateUser ************************************************************************************************************
// const updateUser = async function (req, res) {

//   let userId = req.params.userId;
//   let user = await userModel.findById(userId);
//   //Return an error if no user with the given id exists in the db
//   if (!user) {
//     return res.send("No such user exists");
//   }else if(user.isDeleted == true){
//     res.send("you can't update this user , this user is deleted from our database")
//   } else{

//   let userData = req.body;
//   let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new : true});
//   res.send({ status: true, data: updatedUser });
// }
// };

// //deleteUser***************************************************************************************
// const deleteUser = async function (req, res) {

//   let userId = req.params.userId;
//   let user = await userModel.findById(userId);
//   //Return an error if no user with the given id exists in the db
//   if (!user) {
//     return res.send("No such user exists");
//   } else if(user.isDeleted == true){
//     res.send("this account  is already deleted, please create new account to delte ")
//   }else{
//   let updatedUser = await userModel.findOneAndUpdate({ _id: userId },{ isDeleted : true},{new : true});
//   res.send({ status: true, dl : "user deleted successfully", data: updatedUser });
// }
// };

// module.exports.createUser = createUser;
// module.exports.getUserData = getUserData;
// module.exports.updateUser = updateUser;
// module.exports.loginUser = loginUser;
// module.exports.postMessage = postMessage
// module.exports.deleteUser = deleteUser
















//==============================================================================//======================================================================

// const jwt = require("jsonwebtoken");
// const userModel = require("../models/userModel");

// // const userSchema=require("../models/userdata");
// // const jwt = require("jsonwebtoken");


// // singup 
// const createuser=async function(req,res){
//     const data=req.body
//     const savedData=await userModel.create(data);
//     res.send({
//         msg:"saved data", data:savedData
//     })
// }
// // login
// const logInUsers=async function(req,res){
//     const data=req.body
//     const getData=await userModel.findOne({emailId:data.emailId, password:data.password})
//     // when data not get
//     if(!getData){
//         return res.send({msg:"password or userName is wrong try again..."})
//     }
//     // after successful login create token
//     let token=jwt.sign({
//         userId:getData._id.toString(),
//         batch:"plutonium",
//         orgnigation:"Functionup"
//     },
//     "plutonium-very-very-secret-key")
//     res.setHeader("x-Auth-token",token)
//     res.send({
//         status:true,
//         token:token
//     })
// }

// // fething the userData
// const getUserData=async function(req,res){

//     const userId=req.params.userId;
//     let userDeatails = await userModel.findById(userId)
//     if(!userDetails){
//         res.send({status:"false",msg:"No such user exist"});
//     }else if (userDeatails.isDelate==true){
//         res.send("this user is deleted from our database you can't find")
//     }else{
//         res.send({status:true,data:userDeatails});
//     }
// }


// //=============post message============================//
// const postmessage= async function(req,res){
//     let message=req.body.message
//     if(!user){
//         return res.send({satus:"false",msg:"no sech usr exists"})
//     }else if(user.isdelate===true){
//         res.send("this user is delete from our database you can't post a message")
//     }else{
//         let updatePosts=user.post

//     //add the message to user 's posts
// updatePosts.push(message)
// let update = await userModel.findByIdAndUpdate({_id:user._id},{posts:updatePosts},{new:true})
// return res.sen({status:true,data:updateuser})
// }
// }


// // Write a **PUT api /users/:userId** to update user details. Pass the userId as path param in the url and update the attributes received in the request body. Check that request must contain **x-auth-token** header. If absent, return a suitable error.

// const update=async function(req,res){
//     const id=req.params.userId
//     const data=req.body
//     const update=await userModel.findByIdAndUpdate({_id:id},data,{new:true})
// res.send({status:true,msg:update})
// }

// //Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain **x-auth-token** header. If absent, return a suitable error.

// const isdelete=async function(req,res){
// const id=req.param.userId
// const data=req.body
// const delData=await userSchema.findOneAndUpdate({_id:id,isdelete:true})
// res.send({status:"update data",msg:delData})
// }
// module.exports.createuser=createuser
// module.exports.logInUsers=logInUsers
// module.exports.getUserData=getUserData
// module.exports.postmessage=postmessage
// module.exports.updateData=update
// module.exports.isdelete=isdelete