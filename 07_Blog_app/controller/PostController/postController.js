const  Post  = require('../../models/post')

const createPost = async(req, res) => {
   try{
        const {title, description} = req.body;
        const newPost = new Post({
            title,
            description,
        });

        const savedPost = await newPost.save();
        res.status(200).json({
            success:true,
            data:savedPost,
            message:"Post Created successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message,
            data:"Error while doing this"
        });
    }
}

const getPosts = async(req, res) =>{
    try{
        const posts = await Post.find({});
         res.status(201).json({
            success: true,
            data: posts,
            message: "All Posts fetched successfully"
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message,
            data:"Error while doing this"
        });
    }
}


const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { $inc: { like: 1 } },
            { new: true }
        );
        if (!updatedPost) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }
        res.status(200).json({
            success: true,
            data: updatedPost,
            message: "Post liked successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};



const dislikePost = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { $inc: { dislike: 1 } },
            { new: true }
        );
        if (!updatedPost) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }
        res.status(200).json({
            success: true,
            data: updatedPost,
            message: "Post disliked successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


module.exports = { createPost, getPosts, likePost, dislikePost};