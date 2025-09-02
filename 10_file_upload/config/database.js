const mongoose = require('mongoose');
require('dotenv').config();

exports.connectDb = () => {
    mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("Database is connected sucessfully");
    })
    .catch((err) => {
        console.log("Error in connecting Database");
        console.log(err);
        process.exit(1);    
    })
}