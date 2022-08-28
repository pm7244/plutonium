const producatModel = require("../models/productModel")

const createProduct = async function (req,res){
    let data=req.body
    
    let saveProductModel = await producatModel.create(data)
    return res.send({msg : saveProductModel})
}
module.exports.createProduct = createProduct




// const create= async function (req, res) {
//     let data= req.body
//     let savedData= await publisherModel.create(data)
//     res.send({msg: savedData})
// }

