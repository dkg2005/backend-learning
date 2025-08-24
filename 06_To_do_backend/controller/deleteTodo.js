const Todo = require('../models/Todo');

exports.deleteTodo = async(req, res) => {
    try{
        let id = req.params.id;
        let response = await Todo.findByIdAndDelete({_id:id});
        res.status(200).json({
            status:true,
            data:response,
            message:"Entry deleted sucessfully"
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            status:false,
            data:"Do not deleted entry"
        });
    }
}