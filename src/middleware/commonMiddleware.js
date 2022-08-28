const validation = function(req,res,next){
let tokenHeaders = req.headers.isfreeappuser
console.log(tokenHeaders)
if(!tokenHeaders)
{
    res.send("plaese enter isFreeAppUser Boolean field with value")
}
else{
    next()
}
}

const mid2= function(req,res,next){
console.log("hii i am middleware named mid2")
next()
}
const mid3= function(req,res,next){
    console.log("Hii i am midddleware name mid3")
    next()
}

module.exports.mid2=mid2
module.exports.mid3=mid3
module.exports.validation=validation


