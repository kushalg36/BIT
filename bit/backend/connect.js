const mongoose = require('mongoose');

//Connect to mongoose
mongoose.connect('mongodb://localhost:27017/isuue_tracker',{useNewUrlParser: true});

mongoose.connection.once('open',function(){
    console.log("Database is Connected");
}).on('error',function(error){
    console.log('Connection error:',error);
})
