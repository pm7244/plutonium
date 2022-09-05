

const AuthorModel = require('../model/authorModel');
// const authoController = require('../model/authorModel');

const createAuthor = async function(req, res){

    let data = req.body ;
    let authordata = await AuthorModel.create(data)

    res.send({msg : authordata , status : true})


}

module.exports.createAuthor = createAuthor ;