const userSchema = require('../models/user');
const JWT = require("jsonwebtoken");
const {
  check,
  validationResult
} = require("express-validator");

let email ="";
// POST
exports.addNewUser = async function addNewUser(req, res, next) {
  console.log("post");
  const obj = req.body
  let emailChecked = check(obj.email, "Invalid email").isEmail();
  let passwordChecked = check(obj.password, "Password must be at least 6 chars long").isLength({
    min: 6
  })
  const userObj = new userSchema({
    name: obj.name,
    email: obj.email,
    height: obj.height,
    weight: obj.weight,
    age: obj.age,
    sex: obj.sex
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

    try {
      if (!user.validatePassword(req.body.password)) {
        //password did not match
        res.status(400).json({
          message: "Invalid login credentials"
        })
      } else {
       let jsonToken =  JWT.sign(req.body.email,process.env.TOKEN_SECRET);
       res.header('auth-token',jsonToken).send(jsonToken);
       console.log(jsonToken);
        // password matched. proceed forward
        // without id, v and password fields
        //res.send(extract(user))
      }
    } catch (err) {
      res.status(400).json({
        message: 'User doesnt exist'
      })
    }
  })
}

// PUT {name,email,password,age,sex,weight,height}  - currentEmail
exports.editUser = async function editUser(req, res, next) {
  userSchema.findOne({
    email: req.body.currentEmail
  }, function (err, user) {

    user.name = req.body.name
    user.password = user.generateHash(req.body.password)
    user.email = req.body.email
    user.weight = req.body.weight
    user.height = req.body.height
    user.sex = req.body.sex


    if (err)
      res.status(400).json({
        message: err
      })

    user.save()
    res.send(extract(user))
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
    sex: user.sex
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
    res.send(extract(deleted))
  } else {
    res.send("User doesn't exist.")
  }

}

// GET
exports.getUserById = async function getUserById(req, res, next) {

}