const express = require('express');
const router = express.Router();

const { createPost, getPosts, likePost, dislikePost } = require('../controller/PostController/postController');
const { doComment, getComments} = require('../controller/CommentController/commentController');

router.post("/createPost", createPost);
router.get("/getPosts", getPosts);
router.put("/likePost/:id", likePost);
router.put("/dislikePost/:id", dislikePost);
router.post("/doComment", doComment);
router.get("/getComments", getComments)


module.exports = router;