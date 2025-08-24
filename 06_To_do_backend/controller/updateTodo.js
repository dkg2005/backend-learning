const Todo = require('../models/Todo');

exports.updateTodo = async(req, res) => {
    try{
        const id = req.params.id;
        const {title, description} = req.body;
        const response = await Todo.findByIdAndUpdate({_id:id}, {title, description, updatedAt:Date.now()});
        res.status(200).json({
            sucess: true,
            data: response,
            message:"Todo updated sucessfully"
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