const userSchema = require('../models/user')


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
    sex: obj.sex
  })
  userObj.password = userObj.generateHash(obj.password)

  try {
    const result = await userObj.save()
    // without id, v and password fields
    const resObj = {
      name: result.name,
      email: result.email,
      height: result.height,
      weight: result.weight,
      age: result.age,
      sex: result.sex
    }
    res.status(400).send(resObj)
  } catch (err) {
    if (err.toString().includes('duplicate')) {
      res.status(400).json({ message: "Email already taken" })
    } else
      res.status(400).json({ message: err.message })
  }
}

// POST
exports.checkUserByEmailAndPassword = async function checkUserByEmailAndPassword(req, res, next) {
  console.log('login');
  userSchema.findOne({ name: req.body.name }, function (err, user) {

    if (!user.validatePassword(req.body.password)) {
      //password did not match
      res.status(400).json({ message: "Invalid login credentials" })
    } else {
      // password matched. proceed forward
      // without id, v and password fields
      const resObj = {
        name: user.name,
        email: user.email,
        height: user.height,
        weight: user.weight,
        age: user.age,
        sex: user.sex
      }
      res.send(resObj)
    }
  })
}

// PUT
exports.editUser = async function editUser(req, res, next) {

}

// DELETE
exports.deleteUser = async function deleteUser(req, res, next) {

}

// GET
exports.getUserById = async function getUserById(req, res, next) {

}
