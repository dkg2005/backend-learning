const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50
        },
        description:{
            type:String,
            required:true,
            maxLength:500
        },
        like:{
            type:Number,
            required:true,
            default:0
        },
        dislike:{
            type:Number,
            required:true,
            default:0
        }
    }
)

module.exports = mongoose.model("Post", postSchema);