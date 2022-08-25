// const publisherModel= require("../models/publisherModel")


// const create= async function (req, res) {
//     let data= req.body
//     let savedData= await publisherModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsers= async function (req, res) {
//     let allUsers= await publisherModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.create= create
// module.exports.getUsers= getUsers




const publisherModel= require("../models/publisherModel")

const code = async function(res,req){
    let tokenDateInHeaders=req.headers.tokenDateInHeaders
    console.log(tokenDateInHeaders)

    //console.log("Header Data Above")
    console.log("you have reached in handler")
    res.send({msg:"This is coming from controller"})
}