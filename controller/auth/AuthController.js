const express = require('express');
const router = express.Router();
const verifyToken = require('./VerifyToken');
const UserRoutes = require('../../routes/UserRoutes');

//Routes
router.post('/signup', UserRoutes.UserSignup);
router.get('/getAllUsers', UserRoutes.getAllUsers);
//GET user by id
router.get('/getUserById/:userId', verifyToken, UserRoutes.findUserById);
// DELETES A USER FROM THE DATABASE
router.delete('/deleteUserById/:userId', verifyToken, UserRoutes.deleteUserById);
// UPDATES A SINGLE USER IN THE DATABASE
router.put('/update/:userId', verifyToken, UserRoutes.updateUserById);
router.post('/login', UserRoutes.loginUser);
router.get('/logout', UserRoutes.logout);  
  
module.exports = router;