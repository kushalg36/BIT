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
        return res.send('Username can\'t be blank')
    }
    if(!password) {
        return res.send('Password can\'t be blank')
    }
    username = username.trim();

    // Find user by username
    User.findOne({username:username}).then(user => {
        // Checks if user exists
        if(!user) {
            return res.send('Username not found');
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
                    return res.send("Password is incorrect")
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
        return res.send("Username can't be blank")
    }
    if(!password) {
        return res.send("Password can't be blank")
    }
    if(!name){
        return res.send("Name can't be blank")
    }
    if(!team) {
        return res.send("Team can't be blank")
    }
    if(!desk_no){
        return res.send("Desk Number can't be blank")
    }
    if(!ext_no) {
        return res.send("Extension number can't be blank")
    }
    if(!approver) {
        return res.send("Approver's ID can't be blank> Please check whether you are logged In or not")
    }
    username = username.trim();

    // Check for existing username
    User.findOne({username:username}).then(user => {
        if(!user) {
            User.findOne({username:approver}).then(usercheck =>{
                if(!usercheck) {
                    res.send("Enter correct Approver's ID")
                }
                else {
                    User.create({username: username,password:hashedPassword,name:name,team:team,Desk_no:desk_no,Ext_no:ext_no,approver:approver})
                    .then(user => {
                res.send("Successful");
            });
                }
            })
            
        }
        else {
            res.send( "Username already exist")
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
    const {substatus} = body;
    const {type} = body;

    if(!subject){
        res.send('Enter subject')
    }

    if(!email){
        res.send('Enter email')
    }

    if(!number){
        res.send('Enter number')
    }

    if(!logic){
        res.send('Enter logic')
    }

    if(!approver) {
        res.send('Please login first')
    }

    if(!type) {
        res.send('Enter type of issue')
    }

    if(!name) {
        res.send('Enter name of trouble maker❌')
    }

    Issue.findOne({subject:subject}).then(issue => {
        if(!issue) {
            Issue.create({subject:subject,type:type,email:email,number:number,logic:logic,approver:approver,team:team,status:status,timestamp: Date(),substatus:substatus,name: name})
            .then(up_issue => {
                res.send('issue saved');
            });
        }
        else {
            res.send("Issue has already been saved!")
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


    router.put('/intimations/:id',(req,res) => {
        Issue.findByIdAndUpdate({_id:req.params.id},req.body).then(result => {
            res.send(result)
        });
    });


    router.put('/issue/:id',(req,res) => {
        Issue.findByIdAndUpdate({_id:req.params.id},req.body).then(result => {
            res.send(result)
        });
    });

    router.delete('/intimations/:id',(req,res) => {
        Issue.findByIdAndDelete({_id:req.params.id}).then(result => {
            res.send(result)
        });
    });

    router.delete('/issue/:id',(req,res) => {
        Issue.findByIdAndDelete({_id:req.params.id}).then(result => {
            res.send(result)
        });
    });



module.exports = router;