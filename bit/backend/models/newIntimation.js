const mongoose = require('mongoose');

const intimationSchema = new mongoose.Schema ({
    subject: String,
    time: String,
    ip: String,
    approver: String,
    impact: String,
    status: String,
    substatus: String,
    appname: Array,
    circle: Array,
    issue:String
}, {versionKey: false});

const intimation = mongoose.model('intimation',intimationSchema);

module.exports = intimation;