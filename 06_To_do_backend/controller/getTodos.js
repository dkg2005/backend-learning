const Todo = require('../models/Todo');

exports.getTodos = async(req, res) => {
    try{
        const todos = await Todo.find({});
        res.status(200).json({
            sucess: true,
            data: todos,
            message:"Data fetched sucessfully"
        });
    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            sucess:false,
            data:"Internal server error",
            message:err.message
        })
    }
}