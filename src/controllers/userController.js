const UserModel= require("../models/userModel")
const BookSchema = require("../models/book.js")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const createBook = async function(req, res) {
    let bookData = req.body
    let savedBook = await BookSchema.create(bookData)

    res.send({ status: savedBook })
}

const getbookdata = async function(req, res) {
    let allBook = await BookSchema.find()
    res.send({ books: allBook })

}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createBook = createBook
module.exports.getbookdata = getbookdata 