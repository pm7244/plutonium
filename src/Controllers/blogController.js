
const Blogmodel = require('../model/blogsModel');


const createBlog = async function(req, res){
    try{

    let data = req.body ;
    let Blogdata = await Blogmodel.create(data)

    res.status(201).send({msg : Blogdata , status : true})
    
    }
catch(error){
    res.status(500).send({status:false , msg :error.message})
 console.log("data not find")
}
}

module.exports.createBlog = createBlog ;