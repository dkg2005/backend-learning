const Todo = require('../models/Todo');

exports.getTodo = async(req, res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findOne({_id:id});

        if(!todo){
            return res.status(400).json({
                sucess : false,
                message: "No Data Found"
                })
        }

        res.status(200).json({
            sucess: true,
            data: todo,
            message:"Entry created sucessfully"
        });
    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            sucess:false,
            data:"Internal server error",
            message:"err.message"
        })
    }
}