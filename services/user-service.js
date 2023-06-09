const userModel = require('../model/user-model')

const userService = {
  addUser: (username,password,age,avatar) => {
    return userModel.create({username,password,age,avatar})
  },
  updateUser: (req,username,password,age) => {
    return userModel.updateOne({_id:req.params.id},{username,password,age})
  },
  userList: (pagesize,pagenum) => {
    return userModel.find({},{password: 0}).sort({age:1}).skip((pagenum - 1) * pagesize).limit(pagesize)
  },
  deleteUser: (id) => {
    return userModel.deleteOne({_id:id})
  },
  loginUser: (username,password) => {
    return userModel.find({username,password})
  }
}

module.exports = userService