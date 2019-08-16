const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema ({
    subject: String,
    email: String,
    number: String,
    logic: String,
    team: String,
    approver: String,
    status:String,
    timestamp: String,
    subStatus: String,
    name: String

},{versionKey:false});

const issue = mongoose.model('issue',issueSchema);

module.exports = issue;