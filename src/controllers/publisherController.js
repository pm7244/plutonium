const publisherModel= require("../models/publisherModel")


const create= async function (req, res) {
    let data= req.body
    let savedData= await publisherModel.create(data)
    res.send({msg: savedData})
}

const getUsers= async function (req, res) {
    let allUsers= await publisherModel.find()
    res.send({msg: allUsers})
}

module.exports.create= create
module.exports.getUsers= getUsers