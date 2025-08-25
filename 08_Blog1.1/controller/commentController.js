const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async(req, res) =>{
    try{
        const {post, user, body} = req.body;
        const comment = new Comment({
            post, user, body
        });
        // save comment to db
        const savedComment = await comment.save();

        // find the post by id and update the comment array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new:true})
                            .populate("comments")  // populate the comments array with the comment document
                            .exec();

        res.json({
            post:updatedPost
        })
        
    }
    catch(err){
        res.status(500).json({
            error:"Error while commenting.."
        })
    }
}