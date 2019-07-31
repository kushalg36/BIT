const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/user',function(req,res){
    const {body} = req;
    var {username} = body;
    var {password} = body;

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
    username = username.trim();

    // Find user by username
    User.findOne({username:username}).then(user => {
        // Checks if user already exists
        if(!user) {
            return res.send({
                success:false,
                message:"Username not found"
            });
        }
        // Check password
        else{
            if(user.password == password){
                return res.send(user);
            }
            else{
                return res.send({
                    success:false,
                    message: "Password is incorrect"
                })
            }
        }
    });
});

module.exports = router;