const userController = require('../controllers/usercontroller')

const express = require("express");
const router = express.Router({ mergeParams: true });

router.post('/register', userController.addNewUser)


router.post('/login', userController.checkUserByEmailAndPassword)

router.put('/edit', userController.editUser)

router.delete('/delete', userController.deleteUser)

module.exports = router
