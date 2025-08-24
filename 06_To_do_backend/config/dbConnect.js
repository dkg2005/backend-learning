const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("Database is connected")
    }).catch((err) => {
        console.log("Error while connecting database", err);
    })
}

module.exports=dbConnect;