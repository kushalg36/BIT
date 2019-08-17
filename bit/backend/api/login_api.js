const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken.js');
const  Issue = require('../models/newIssue');


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
                    const token = jwt.sign({_id:user._id},SECRET_KEY,{expiresIn: '24h'});
                    return res.status(200).json({
                        message: "Authentication Successful",
                        token:token});
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



router.post('/issue',verify,function(req,res) {
    const {body} = req;
    const {subject} = body;
    const {email} = body;
    const {number} = body;
    const {logic} = body;
    const {approver} = body;
    const {team} = body;
    const {status} = body;
    const {name} = body;
    const {subStatus} = body;
    const {type} = body;

    if(!subject){
        res.send({
            success:false,
            message:'Enter subject'
        })
    }

    if(!email){
        res.send({
            success:false,
            message:'Enter email'
        })
    }

    if(!number){
        res.send({
            success:false,
            message:'Enter number'
        })
    }

    if(!logic){
        res.send({
            success:false,
            message:'Enter logic'
        })
    }

    if(!approver) {
        res.send({
            success:false,
            message: 'Please login first'
        })
    }

    Issue.findOne({subject:subject}).then(issue => {
        if(!issue) {
            Issue.create({subject:subject,type:type,email:email,number:number,logic:logic,approver:approver,team:team,status:status,timestamp: Date(),subStatus:subStatus,name: name})
            .then(up_issue => {
                res.send(up_issue);
            });
        }
        else {
            res.send({
                success:false,
                message:"Issue has already been saved!"
            })
        }
    });
    
});



    router.post('/issues',verify,(req,res) => {
        Issue.find({status:'open',type: {$ne: 'intimation'}}).then(issues => {
            res.send(issues);
        });
    });


    router.post('/intimation',verify,(req,res) => {
        Issue.find({status:'open',type:'intimation'}).then(issues => {
            res.send(issues);
        });
    });

    router.post('/issueSummary',verify,(req,res) => {
        // console.log(req.body);
        Issue.find({_id:req.body.id}).then(issueSum => {
            res.send(issueSum);
        });
    });

    
    router.post('/intimationSummary',verify,(req,res) => {
        // console.log(req.body);
        Issue.find({_id:req.body.id}).then(intimationSum => {
            res.send(intimationSum);
        });
    });


    router.post('/userDetails',(req,res) => {
        User.findOne({username:req.body.username}).then(user => {
            if(user) {
                res.send(user)
            }
        });
    });



module.exports = router;