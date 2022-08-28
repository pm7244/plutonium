const userModel = require("../models/userModel")

const basicCode = async function(req,res,next){
    let tokanDataHeader = req.header.token
    console.log(tokanDataHeader)
    
    console.log("header Data")
    console.log("hey man, congrats you have reached the Handler")
    next()
}
//1 creating the user
const createUser = async function(req,res){
    let data = req.body
    let token=req.headers.isfreeappuser
    //let token=data.isfreeappuser
    let allData = await userModel.create(data)
        res.send({msg : allData})
}

module.exports.createUser=createUser
