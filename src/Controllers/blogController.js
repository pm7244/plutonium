
 const mongooge = require('mongoose');
const blogsModel = require('../model/blogsModel');




const createBlog = async function(req, res){
    try{

    let data = req.body ;
    let Blogdata = await blogsModel.create(data)

    res.status(201).send({ status : true ,msg : Blogdata })
    
    }
catch(error){
    res.status(500).send({status:false , msg :error.message})
 console.log("data not find")
}
}

// get blog

const getBlog = async function (req, res){
    const {authorid} =req.query
    const blogData ={isDeleted:true,
        isPublished:true,deletedAt:null}

    if(authorid)
    {
        
        if(mongooge.Types.ObjectId.isValid(authorid))
        blogData.authorid=authorid
        else if(!mongooge.Types.ObjectId.isValid(authorid))
        return
        res.status(500).send({status:false,msg:"wrong valid authorid"})
    }

}

// const getblog=async function(res,res){
//     try{
//     let body=req.query;
//     let data=await blogsModel.find({isDeleted:false,isPublished:true,body});
//     if(!data){
//         return res.status(404).send({status:false,mes:"data not found"})

//     }else{
//      return res.status(200).send({status:true,mes:"data"})
//     }
// }
//     catch(error){
//         res.status(500).send({status:false , msg :error.message})
// }
// }

// const filterQuery = { }
//         const queryParams = req.query

//         if(isValidRequestBody(queryParams)) {
//             const {authorId, category, tags, subcategory} = queryParams

//             if(isValid(authorId) && isValidObjectId(authorId)) {
//                 filterQuery['authorId'] = authorId
//             }

//             if(isValid(category)) {
//                 filterQuery['category'] = category.trim()
//             }











module.exports.getblog=getBlog;
module.exports.createBlog = createBlog ;

