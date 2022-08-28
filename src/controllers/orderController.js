const oredreModel = require("../models/orderModel") 
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function(req, res){
    let data = req.body
    console.log(data.amount)
    let userId=data.userId
    let productId = data.productId

   if(!userId){
    return res.send({msg:"UserId is mandatory in the request"})
} else if(!productId){
    return res.send({msg:"productId is mandatory in the request"})
}


let UserId = await userModel.findById(userId)
let ProductId= await productModel.findById(productId)

if (!UserId){
    return res.send({msg:"not found by this userId in the Database"})
 } else if(!ProductId){
    return res.send({msg:"not found by this productId in the Database"})
}
else{}



let tokan =req.headers.isFreeappuser
console.log(tokan)
let val = 0
//if isFreeAppUser is true
if(tokan==='true'){
data.amount=val
data.isFreeAppUser=tokan
let savaData = await oredreModel.create(data)
res.send({data:SaveData})
}
//if isFreeAppUser is false
else if (userId.balance>=productId.price){

await userModel.findOneAndUpdate({ _Id:userId},
    {$set:{balance:UserId.balance-ProductId.Price} })
    data['amount']=productId.Price;
    data['isFreeAppuser']= req.headers.isfreeappuser;
    
    let savedata = awaitorderModel.create(data)
    res.send({mdg:savedata})
}
else{
      res.send("Insufficient Balance")
 }
}

module.exports.createOrder=createOrder



   
   

