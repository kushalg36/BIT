const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken.js');


//LOGIN
router.post('/login',function(req,res){

    const {body} = req;
    var {username} = body;
    var {password} = body;

    if(!username){
        return res.status(400).send('Username can\'t be blank')
    }
    if(!password) {
        return res.status(400).send('Password can\'t be blank')
    }
    username = username.trim();

    // Find user by username
    User.findOne({username:username}).then(user => {
        // Checks if user exists
        if(!user) {
            return res.status(400).send('Username not found');
        }
        // Check password
        else{
            bcrypt.compare(password,user.password).then(result => {
                if(result){
                    // Tokens
                    const SECRET_KEY = 'fkdsjlkfjdkNKJHRKSJHK';
                    const token = jwt.sign({_id:user._id},SECRET_KEY);
                    res.header('auth-token',token);
                    return res.send(user);
                }
                else{
                    return res.status(400).send("Password is incorrect")
            }
            })
        }
    });
});

//SIGNUP

router.post('/signup',verify,function(req,res){

    var {body} = req;
    var {username} = body;
    var {password} = body;
    var {name} = body;
    var {team} = body;
    var {desk_no} = body;
    var {ext_no} = body;
    var {approver} = body;

    // Hashed password
    bcrypt.genSalt(10).then(salt =>{
        bcrypt.hash(password,salt).then(hashedData => {
            hashedPassword = hashedData
        })
    });


    if(!username){
        return res.send({
            success: false,
            message: "Username can't be blank"
        })
    }
    if(!password) {
        return res.send({
            success:false,
            message: "Password can't be blank"
        })
    }
    if(!name){
        return res.send({
            success: false,
            message: "Name can't be blank"
        })
    }
    if(!team) {
        return res.send({
            success:false,
            message: "Team can't be blank"
        })
    }
    if(!desk_no){
        return res.send({
            success: false,
            message: "Desk Number can't be blank"
        })
    }
    if(!ext_no) {
        return res.send({
            success:false,
            message: "Extension number can't be blank"
        })
    }
    if(!approver) {
        return res.send({
            success:false,
            message: "Approver's ID can't be blank"
        })
    }
    username = username.trim();

    // Check for existing username
    User.findOne({username:username}).then(user => {
        if(!user) {
            User.findOne({username:approver}).then(usercheck =>{
                if(!usercheck) {
                    res.send({
                        success:false,
                        message: "Enter correct Approver's ID"
                    })
                }
                else {
                    User.create({username: username,password:hashedPassword,name:name,team:team,Desk_no:desk_no,Ext_no:ext_no,approver:approver})
                    .then(user => {
                res.send(user);
            });
                }
            })
            
        }
        else {
            res.send({
                success:false,
                message: "Username already exist"
            })
        }
    });
});

module.exports = router;