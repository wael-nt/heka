const userSchema = require('../models/user');
const JWT = require("jsonwebtoken");
const {
  check,
  validationResult
} = require("express-validator");

let email = "";
let jsonToken = "";
// POST
exports.addNewUser = async function addNewUser(req, res, next) {
  console.log("post");
  const obj = req.body
  const userObj = new userSchema({
    name: obj.name,
    email: obj.email,
    height: obj.height,
    weight: obj.weight,
    age: obj.age,
    sex: obj.sex,
    photo: obj.photo
  })
  email = obj.email;
  userObj.password = userObj.generateHash(obj.password)

  try {
    const result = await userObj.save();
    res.send(extract(result))
  } catch (err) {
    if (err.toString().includes('duplicate')) {
      res.status(400).json({
        message: "Email already taken"
      })
    } else
      res.status(400).json({
        message: err.message
      })
  }
}

// POST
exports.checkUserByEmailAndPassword = async function checkUserByEmailAndPassword(req, res, next) {
  console.log('login');
  userSchema.findOne({
    email: req.body.email
  }, function (err, user) {
    console.log('here');
    console.log(req.body);
    try {
      if (!user.validatePassword(req.body.password)) {
        //password did not match
        res.status(400).json({
          message: "Invalid login credentials"
        })
      } else {
        
        // password matched. proceed forward
        // without id, v and password fields
        //res.send(extract(user))
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message: 'User doesnt exist'
      })
    }
  })
}

// PUT {name,email,password,age,sex,weight,height,photo}  - currentEmail
exports.editUser = async function editUser(req, res, next) {
  console.log('here');
  console.log(req.body);
  userSchema.findOne({
  email: req.body.email
  }, function (err, user) {
    res.set('Access-Control-Allow-Origin', '*');
    try {
      console.log("Problem")
      console.log(req.body.currentPassword)
      if (!user.validatePassword(req.body.currentPassword)) {
        res.status(400).json({
          message: "Invalid credentials"
        })
      } else {
        user.name = req.body.name
        user.password = user.generateHash(req.body.newPassword)
        // user.email = req.body.email
        user.weight = req.body.weight
        user.height = req.body.height
        user.sex = req.body.sex
        user.photo = req.body.photo
        console.log('before saving');
        user.save();
        console.log('after');
        res.status(200).json(extractEdit(user));
        if (err) {
          res.status(400).json({
            message: err
          })
        }
      }
    } catch (err) {
      res.status(400).json(
        err.message
        )
    }

  })
}

// without _id, _v and password fields
function extract(user) {
  const resObj = {
    name: user.name,
    email: user.email,
    height: user.height,
    weight: user.weight,
    age: user.age,
    sex: user.sex,
    photo: user.photo,
    jwt: jsonToken  
  }
  return resObj
}
function extractEdit(user) {
  const resObj = {
    name: user.name,
    email: user.email,
    height: user.height,
    weight: user.weight,
    age: user.age,
    sex: user.sex,
    photo: user.photo 
  }
  return resObj
}

// DELETE
exports.deleteUser = async function deleteUser(req, res, next) {
  const deleted = await userSchema.findOne({
    email: req.body.email
  })
  if (deleted != null) {
    await userSchema.deleteOne({
      email: req.body.email
    })
    res.send(extractEdit(deleted))
  } else {
    res.send("User doesn't exist.")
  }

}

// GET
exports.getUserById = async function getUserById(req, res, next) {

}