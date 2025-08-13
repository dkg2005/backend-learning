let mongoose = require('mongoose');

let userEnquireSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

let enquiryModel = mongoose.model("enqiry", userEnquireSchema);
module.exports = enquiryModel;