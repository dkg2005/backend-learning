const Comment = require('../../models/comment');

const doComment = async(req, res) => {
    try {
        const { postId, text } = req.body; // Expecting postId and text in body
        const newComment = new Comment({ postId, text });
        const savedComment = await newComment.save();
        res.status(200).json({
            success: true,
            data: savedComment,
            message: "Comment added successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data:"Error while doing this"
        });
    }

}

const getComments = async(req, res) => {
     try {
        const { postId } = req.query; // Expecting postId as query parameter
        const comments = await Comment.find({ postId });
        res.status(200).json({
            success: true,
            data: comments,
            message: "Comments fetched successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data:"Error while doing this"
        });
    }
}

module.exports = { doComment, getComments };