
const mongoose = require('mongoose');
const authorModel = require('../model/authorModel');
const blogsModel = require('../model/blogsModel');


const createBlog = async function (req, res) {
  try {

    let data = req.body;
    let Blogdata = await blogsModel.create(data)

    res.status(201).send({ status: true, msg: Blogdata })

  }
  catch (error) {
    res.status(500).send({ status: false, msg: error.message })
    console.log("data not find")
  }
}
///getblogs

const getblogs = async function (req, res) {
  try {
    req.query.isDeleted = false
    req.query.isPublished = true
    let myData = await blogsModel.find(req.query)
    if (myData.length < 1) {
      return res.status(404).send({status: false,msg: "not blog found"})
    }
    return res.status(200).send({status: true,data: myData})
  } catch (error) {return res.status(500).send({status: false,msg: error.message})
  }
}


///udate

const updateblog = async function (req, res) {
  try {
    let {title, body,  tags, subcategory}=req.body
    let myData = await blogsModel.findOneAndUpdate({_id:req.params.blogId},{title, body,  tags, subcategory},{new:true})
    return res.status(200).send({
      status: true,
      data: myData
    }
    )
  } catch (error) {
    return res.status(500).send({
      status: false,
      msg: error.message
    })
  }
}
//delete

const deleteblog = async function (req, res) {
  try {
    
    let myData = await blogsModel.findOneAndUpdate({_id:req.params.blogId},{isDeleted:true},{new:true})
    return res.status(200).send({
      status: true,
      data: myData
    }
    )
  } catch (error) {
    return res.status(500).send({
      status: false,
      msg: error.message
    })
  }
}




























module.exports.deleteblog=deleteblog
module.exports.updateblog=updateblog
module.exports.getblogs = getblogs
module.exports.createBlog = createBlog;

