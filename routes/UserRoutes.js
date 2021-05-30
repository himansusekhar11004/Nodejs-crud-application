const config =  require('../config');
const User = require('../model/User/UserSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
function UserSignup(req, res){
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    User.create({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword
    }, (err, user) => { 
        if (err) return res.status(500).send("There was a problem registering the user.")
        const token = jwt.sign({ id: user._id }, config.secret, { 
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    });
}

function findUserById(req, res){
    User.findById(req.userId,  { password: 0 }, (err, user) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
      });
}

function getAllUsers(req, res){
    User.find({}, (err, users) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(users);
    })
}
function deleteUserById(req, res){
    User.findByIdAndRemove(req.userId,  (err, user) => {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        console.log(user);
        res.status(200).send("User: "+ (user && user.name ? user.name : '' ) +" was deleted.");
    });
}
function updateUserById(req, res){
    User.findByIdAndUpdate(req.userId, req.body, {new: true},  (err, user) => {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
}

function loginUser(req, res){
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    });
}

function logout(req, res){
    res.status(200).send({ auth: false, token: null });
}
module.exports = {UserSignup, findUserById, getAllUsers, deleteUserById, updateUserById, loginUser, logout}