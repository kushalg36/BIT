const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    username: String,
    password: String,
    name: String,
    team: String,
    Desk_no: String,
    Ext_no: String,
    approver: String
},{versionKey:false});

const user = mongoose.model('Users',userSchema);

module.exports = user;